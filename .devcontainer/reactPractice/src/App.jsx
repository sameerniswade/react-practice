import { useState } from "react";

import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decreaseCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Count : {counter}</h1>
      <div className={styles.buttons}>
        <button onClick={increaseCount}>
          Increase count by 1
        </button>
        <button onClick={decreaseCount}>
          Decrease count by 1
        </button>
      </div>
    </div>
  );
}

export default App;
