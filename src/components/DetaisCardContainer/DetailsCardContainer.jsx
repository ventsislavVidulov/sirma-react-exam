import styles from "./DetailsCardContainer.module.css";

const DetailsCardContainer = ({ children, type }) => {
    return (
        <div className={styles.cardList}>
            {children}
        </div>
    )
}

export default DetailsCardContainer;