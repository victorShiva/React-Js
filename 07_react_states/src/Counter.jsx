import { useState } from "react";

//export default function Counter() {
//  //  let arr = useState(10);
//  //  console.log(arr);
//  //  let [state, setState] = useState(0);

//  let [count, setCount] = useState(0);

//  function incCount() {
//    setCount(count + 1);
//  }

//  return (
//    <>
//      <h3>Count : {count}</h3>
//      <button onClick={incCount}>Increase</button>
//    </>
//  );
//}

//export default function Counter() {
//  let [count, setCount] = useState(0);

//  function incCount() {
//    setCount((currVal) => currVal + 1);
//    setCount((currVal) => currVal + 1);
//    setCount((currVal) => currVal + 1);
//    console.log(count);
//  }

//  return (
//    <>
//      <h3>Count : {count}</h3>
//      <button onClick={incCount}>Increase</button>
//    </>
//  );
//}

function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);
  console.log("Component was rerender!");

  function incCount() {
    //setCount(25);
    setCount((curr) => curr + 1);
  }

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={incCount}>Increase</button>
    </>
  );
}
