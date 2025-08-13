import { useEffect, useState, useRef } from "react";

import { useUpdateActor } from "../../queries/actorsQuery/useUpdateActor";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete, DateInput } from "../../ui";

import styles from "./ActorDetailsHeader.module.css";

const ActorDetailsHeader = ({ details: { title: actorName, actorId, info: actorBirthDate } }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(actorName);
    const tempTitle = useRef('');
    const [date, setDate] = useState(actorBirthDate);
    const tempDate = useRef('');
    const updateActorQuery = useUpdateActor(actorId);

    useEffect(() => {
        if (editing) {
            tempTitle.current = (title || actorName);
            tempDate.current = (date || actorBirthDate);
        }
    }, [editing, title, actorName, date, actorBirthDate]);

    const saveHandler = () => {
        if (tempTitle.current.trim() || title) {
            const fetchUpdate = async () => {
                if (editing) {
                    try {
                        setTitle(tempTitle.current);
                        setDate(tempDate);

                        updateActorQuery.mutate({ FullName: tempTitle.current, BirthDate: tempDate.current });
                    } catch (error) {
                        console.error(error.message);
                    }
                }
                setEditing(!editing);
            };
            fetchUpdate();
        }
    };

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        tempTitle.current = (e.target.value);
    };

    const dateChangeHandler = (e) => {
        e.preventDefault();
        tempDate.current = (e.target.value);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    {editing
                        ? <>
                            <CustomFormFieldTitle label={title || actorName} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
                            <div className={styles.buttonsContainer}>
                                <CustomButton>
                                    <FaDelete />
                                </CustomButton>
                                <CustomButton handleClickFunction={saveHandler}>
                                    <FaSave />
                                </CustomButton>
                            </div>
                        </>
                        : <>
                            <h1>{title || actorName}</h1>
                            <CustomButton handleClickFunction={() => setEditing(!editing)}>
                                <FaGear />
                            </CustomButton>
                        </>
                    }
                </div>
                {editing
                    ? <DateInput dateChangeHandler={dateChangeHandler}></DateInput>
                    : <div className={styles.detailsInfo}>{`Actor birth date: ${new Date(date).toDateString()}`}</div>
                }
            </div>
        </>
    )
};

export default ActorDetailsHeader;