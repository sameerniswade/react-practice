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
      <h1>count : {counter}</h1>
      <div className={styles.buttons}>
        <button onClick={increaseCount}>
          click here to Increase count by 1
        </button>
        <button onClick={decreaseCount}>
          click here to decrease count by 1
        </button>
      </div>
    </div>
  );
}

export default App;
