import styles from "./AddActor.module.css";
import { AddActorHeader } from "../../components";

const AddActor = () => {
    return (
        <div className={styles.container}>
            <AddActorHeader />
        </div>
    )
};

export default AddActor;