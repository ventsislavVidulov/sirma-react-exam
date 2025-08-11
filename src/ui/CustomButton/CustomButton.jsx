import styles from "./CustomButton.module.css";

const CustomButton = ({ children, handleClickFunction }) => {
    return (
        <button 
        className={styles.button} 
        click={handleClickFunction}>{children}</button>
    )
};

export default CustomButton;