import styles from "./DateInput.module.css";

const DateInput = ({dateChangeHandler}) => {
    return (
        <input 
        className={styles.dataInput} 
        type="date" 
        name="" 
        id="" 
        onChange={dateChangeHandler}
        />
    )
};

export default DateInput;