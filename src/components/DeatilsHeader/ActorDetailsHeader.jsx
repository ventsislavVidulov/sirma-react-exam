import { useEffect, useState } from "react";

import { useUpdateActor } from "../../queries/actorsQuery/useUpdateActor";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete } from "../../ui";

import styles from "./ActorDetailsHeader.module.css";

const ActorDetailsHeader = ({ details }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(details.title);
    const [tempTitle, setTempTitle] = useState('');
    const updateActorQuery = useUpdateActor(details.actorId);

    useEffect(() => {
        if (editing) {
            setTempTitle(title || details.title);
        }
    }, [editing, title, details.title]);

    const saveHandler = () => {
        if (tempTitle.trim() || title) {
            const fetchUpdate = async () => {
                if (editing) {
                    try {
                        setTitle(tempTitle);
                        updateActorQuery.mutate({ FullName: tempTitle, BirthDate: details.info });
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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    {editing
                        ? <>
                            <CustomFormFieldTitle label={title || details.title} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
                           <div className={styles.buttonsContainer}>
                            <CustomButton>
                                <FaDelete/>
                            </CustomButton>
                            <CustomButton handleClickFunction={saveHandler}>
                                <FaSave />
                            </CustomButton>
                           </div>
                        </>
                        : <>
                            <h1>{title || details.title}</h1>
                            <CustomButton handleClickFunction={() => setEditing(!editing)}>
                                <FaGear />
                            </CustomButton>
                        </>
                    }
                </div>
                <div className={styles.detailsInfo}>{details.info}</div>
            </div>
        </>
    )
};

export default ActorDetailsHeader;