import { useEffect, useState } from "react";

import { useUpdateMovie } from "../../queries/moviesQuery/useUpdateMovie";
import { CustomButton, CustomFormFieldTitle, FaSave, FaGear, FaDelete } from "../../ui";

import styles from "./MovieDetailsHeader.module.css";

const MovieDetailsHeader = ({ details }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(details.title);
    const [tempTitle, setTempTitle] = useState('');
    const updateMovieQuery = useUpdateMovie(details.movieId);

    useEffect(() => {
        if (editing) {
            setTempTitle(title || details.title);
        }
    }, [editing, title, details.title]);

    const saveHandler = () => {
        if (tempTitle.trim() || title) {
            if (editing) {
                try {
                    setTitle(tempTitle);
                    updateMovieQuery.mutate({ Title: tempTitle, ReleaseDate: details.info });
                } catch (error) {
                    console.error(error.message);
                }
            }
            setEditing(!editing);
        }
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

export default MovieDetailsHeader;