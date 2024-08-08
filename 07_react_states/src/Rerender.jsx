import { useState } from "react";

export default function Rerender() {
  let [count, setCount] = useState(0);
  console.log(`Rerender Component ${count}`);

  function increase() {
    setCount(count + 1);
    console.log(`inside increase function ${count}`);
  }

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={increase}>Click Me!</button>
    </div>
  );
}
