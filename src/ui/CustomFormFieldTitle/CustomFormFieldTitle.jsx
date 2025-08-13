import styles from "./CustomFormFieldTitle.module.css";

const CustomFormFieldTitle = ({label, fieldChangeHandler}) => {
    return (
        <>
            <form className={styles.form}>
                <input
                    type="text"
                    id="email"
                    className={styles.formInput}
                    autoComplete="off"
                    placeholder=""
                    onChange={fieldChangeHandler}
                    />
                <label htmlFor="text" className={styles.formLabel}>{label}</label>
            </form>
        </>
    )
}

export default CustomFormFieldTitle;