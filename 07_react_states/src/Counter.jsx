import { useState } from "react";

export default function Counter() {
  //  let arr = useState(10);
  //  console.log(arr);
  //  let [state, setState] = useState(0);

  let [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={incCount}>Increase</button>
    </>
  );
}
