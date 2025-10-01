import { useState } from "react";

import { useUpdateMovie } from "../../queries/moviesQuery/useUpdateMovie";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete, DateInput } from "../../ui";

import styles from "./MovieDetailsHeader.module.css";

const MovieDetailsHeader = ({ details: { title: movieTitleProp, movieId: movieIdProp, info: movieReleaseDateProp } }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(movieTitleProp);
    const [releaseDate, setReleaseDate] = useState(movieReleaseDateProp);
    const updateMovieQuery = useUpdateMovie(movieIdProp);

    const saveHandler = () => {
        if (title.trim()) {
            if (editing) {
                try {
                    updateMovieQuery.mutate({ Title: title, ReleaseDate: releaseDate });
                } catch (error) {
                    console.error(error.message);
                }
            }
            setEditing(!editing);
        }
    };

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const dateChangeHandler = (e) => {
        e.preventDefault();
        setReleaseDate(e.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    {editing
                        ? <>
                            <CustomFormFieldTitle label={title || movieTitleProp} fieldChangeHandler={fieldChangeHandler}></CustomFormFieldTitle>
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
                            <h1>{title || movieTitleProp}</h1>
                            <CustomButton handleClickFunction={() => setEditing(!editing)}>
                                <FaGear />
                            </CustomButton>
                        </>
                    }
                </div>
                {editing
                    ? <DateInput dateChangeHandler={dateChangeHandler} />
                    : <div className={styles.detailsInfo}>{`Movie release date: ${new Date(movieReleaseDateProp).toDateString()}`}</div>
                }
            </div>
        </>
    )
};

export default MovieDetailsHeader;