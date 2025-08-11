import { CustomButton } from "../../ui";
import { FaGear } from "../../ui";

import styles from "./DetailsHeader.module.css";

const DetailsHeader = ({details}) => {
    return (
        <>
            <div className={styles.detailsInfo}>
                <div className={styles.headerContainer}>
                    <h1>{details.title}</h1>
                    <CustomButton>
                        <FaGear />
                    </CustomButton>
                </div>
                <div>{details.info}</div>
            </div>
        </>
    )
}

export default DetailsHeader