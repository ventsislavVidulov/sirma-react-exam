import { useEffect, useState } from "react";

import { CustomButton, CustomFormFieldTitle, FaSave, FaGear } from "../../ui";
import { useActors } from "../../contexts/ActorsContextProvider";

import styles from "./DetailsHeader.module.css";

const DetailsHeader = ({ details }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [tempTitle, setTempTitle] = useState('');
    const actorsContext = useActors();

    useEffect(() => {
    }, [editing, title]);

    const saveHandler = async () => {
        const fetchUpdate = async () => {
            if (editing) {
                try {
                    setTitle(tempTitle);
                    await actorsContext.updateActor(details.actorId, { FullName: title, BirthDate: details.info });
                } catch (error) {
                    console.error(error.message)
                }
            }
            setEditing(!editing);
        };
        fetchUpdate();
    };

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        setTempTitle(e.target.value);
    };

    return (
        <>
            <div className={styles.detailsInfo}>
                <div className={styles.headerContainer}>
                    {editing
                        ? <>
                            <CustomFormFieldTitle label={title || details.title} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
                            <CustomButton handleClickFunction={saveHandler}>
                                <FaSave />
                            </CustomButton>
                        </>
                        : <>
                            <h1>{title || details.title}</h1>
                            <CustomButton handleClickFunction={() => setEditing(!editing)}>
                                <FaGear />
                            </CustomButton>
                        </>
                    }
                </div>
                <div>{details.info}</div>
            </div>
        </>
    )
};

export default DetailsHeader;