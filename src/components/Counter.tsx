import { useState } from "react";
import styles from "./Counter.module.scss";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button
                className={styles.green}
                onClick={() => setCounter(counter + 1)}
            >
                Add
            </button>
            {counter}
        </div>
    );
}
