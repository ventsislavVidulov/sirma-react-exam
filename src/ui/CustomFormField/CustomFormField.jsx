import styles from "./CustomFormField.module.css";

const CustomFormField = () => {
    return (
        <>
            <div className={styles.form}>
                <input
                    type="text"
                    id="email"
                    className={styles.formInput}
                    autoComplete="off"
                    placeholder=""
                />
                <label htmlFor="email" className={styles.formLabel}>Email</label>
            </div>
        </>
    )
}

export default CustomFormField