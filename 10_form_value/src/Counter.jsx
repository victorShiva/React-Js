import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  function handleCountx() {
    setCountx((prev) => prev + 1);
  }
  function handleCounty() {
    setCounty((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("This is using useEffect");
  }, [countx]);

  return (
    <>
      <h3>Countx : {countx}</h3>
      <button onClick={handleCountx}> +1 </button>
      <h3>County : {county}</h3>
      <button onClick={handleCounty}> +1 </button>
    </>
  );
}
