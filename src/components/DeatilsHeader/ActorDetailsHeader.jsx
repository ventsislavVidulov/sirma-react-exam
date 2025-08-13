import { useEffect, useState } from "react";

import { useUpdateActor } from "../../queries/actorsQuery/useUpdateActor";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete, DateInput } from "../../ui";

import styles from "./ActorDetailsHeader.module.css";

const ActorDetailsHeader = ({ details: { title: actorName, actorId, info: actorBirthDate } }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(actorName);
    const [tempTitle, setTempTitle] = useState('');
    const [date, setDate] = useState(actorBirthDate);
    const [tempDate, setTempDate] = useState('');
    const updateActorQuery = useUpdateActor(actorId);

    useEffect(() => {
        if (editing) {
            setTempTitle(title || actorName);
            setTempDate(date || actorBirthDate);
        }
    }, [editing, title, actorName, date, actorBirthDate]);

    const saveHandler = () => {
        if (tempTitle.trim() || title) {
            const fetchUpdate = async () => {
                if (editing) {
                    try {
                        setTitle(tempTitle);
                        setDate(tempDate);
                        console.log(date);

                        updateActorQuery.mutate({ FullName: tempTitle, BirthDate: tempDate });
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
        setTempTitle(e.target.value);
    };

    const dateChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setTempDate(e.target.value);
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