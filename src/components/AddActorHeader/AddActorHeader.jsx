import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton, CustomFormFieldTitle, FaSave, FaDelete, DateInput } from "../../ui";
import { useAddActor } from "../../queries/actorsQuery/useAddActor";
import styles from "./AddActorHeader.module.css";

const AddActorHeader = () => {
    const tempName = useRef('');
    const tempBirthDate = useRef('');
    const { mutateAsync, error } = useAddActor();
    const navigate = useNavigate();

    const saveHandler = async () => {
        if (tempName.current.trim()) {
            try {
                const resultFromMutation = await mutateAsync({ FullName: tempName.current, BirthDate: tempBirthDate.current });
                navigate(`/actors/${resultFromMutation.ID}`);
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        tempName.current = (e.target.value);
    };

    const dateChangeHandler = (e) => {
        e.preventDefault();
        tempBirthDate.current = (e.target.value);
    };

    return (
        <>
            {error && <h1 className={styles.error}>{error.message}</h1>}
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <>
                        <CustomFormFieldTitle label={'enter actor name'} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
                        <div className={styles.buttonsContainer}>
                            <CustomButton handleClickFunction={() => navigate('/actors')}>
                                <FaDelete />
                            </CustomButton>
                            <CustomButton handleClickFunction={saveHandler}>
                                <FaSave />
                            </CustomButton>
                        </div>
                    </>
                </div>
                <DateInput dateChangeHandler={dateChangeHandler} />
            </div>
        </>
    )
};

export default AddActorHeader;