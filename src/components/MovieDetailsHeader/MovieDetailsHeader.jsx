import { useEffect, useState, useRef } from "react";

import { useUpdateMovie } from "../../queries/moviesQuery/useUpdateMovie";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete, DateInput } from "../../ui";

import styles from "./MovieDetailsHeader.module.css";

const MovieDetailsHeader = ({ details: { title: movieTitleProp, movieId: movieIdProp, info: movieReleaseDateProp } }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(movieTitleProp);
    const tempTitle = useRef('');
    const [releaseDate, setReleaseDate] = useState(movieReleaseDateProp);
    const tempReleaseDate = useRef('');
    const updateMovieQuery = useUpdateMovie(movieIdProp);

    useEffect(() => {
        if (editing) {
            tempTitle.current = (title || movieTitleProp);
            tempReleaseDate.current = (releaseDate || movieReleaseDateProp)
        }
    }, [editing, title, movieTitleProp, releaseDate, movieReleaseDateProp]);

    const saveHandler = () => {
        if (tempTitle.current.trim() || title) {
            if (editing) {
                try {
                    setTitle(tempTitle.current);
                    setReleaseDate(tempReleaseDate.current);
                    updateMovieQuery.mutate({ Title: tempTitle.current, ReleaseDate: tempReleaseDate.current });
                } catch (error) {
                    console.error(error.message);
                }
            }
            setEditing(!editing);
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