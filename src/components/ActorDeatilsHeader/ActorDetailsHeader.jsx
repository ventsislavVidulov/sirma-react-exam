import { useEffect, useState, useRef } from "react";

import { useUpdateActor } from "../../queries/actorsQuery/useUpdateActor";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete, DateInput } from "../../ui";

import styles from "./ActorDetailsHeader.module.css";

const ActorDetailsHeader = ({ details: { title: actorNameProp, actorId: actorIdProp, info: actorBirthDateProp } }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(actorNameProp);
    const tempTitle = useRef('');
    const [date, setDate] = useState(actorBirthDateProp);
    const tempDate = useRef('');
    const updateActorQuery = useUpdateActor(actorIdProp);

    useEffect(() => {
        if (editing) {
            tempTitle.current = (title || actorNameProp);
            tempDate.current = (date || actorBirthDateProp);
        }
    }, [editing, title, actorNameProp, date, actorBirthDateProp]);

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
                            <CustomFormFieldTitle label={title || actorNameProp} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
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
                            <h1>{title || actorNameProp}</h1>
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