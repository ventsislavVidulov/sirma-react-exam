import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton, CustomFormFieldTitle, FaSave, FaDelete, DateInput } from "../../ui";
import { useAddMovie } from "../../queries/moviesQuery/useAddMovie";

import styles from "./AddMovieHeader.module.css";

const AddMovieHeader = () => {
    const tempTitle = useRef('');
    const tempReleaseDate = useRef('');
    const { mutateAsync, error } = useAddMovie();
    const navigate = useNavigate();

    const saveHandler = async () => {
        if (tempTitle.current.trim()) {
            try {
                const resultFromMutation = await mutateAsync({ Title: tempTitle.current, ReleaseDate: tempReleaseDate.current });
               navigate(`/movies/${resultFromMutation.ID}`);
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        tempTitle.current = (e.target.value);
    };

    const dateChangeHandler = (e) => {
        e.preventDefault();
        tempReleaseDate.current = (e.target.value);
    };

    return (
        <>
            {error && <h1 className={styles.error}>{error.message}</h1>}
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <>
                        <CustomFormFieldTitle label={'enter movie name'} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
                        <div className={styles.buttonsContainer}>
                            <CustomButton handleClickFunction={() => navigate('/movies')}>
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

export default AddMovieHeader;