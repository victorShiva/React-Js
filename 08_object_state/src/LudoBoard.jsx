import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  const [arr, setArr] = useState([]);

  let updateblue = () => {
    //moves.blue += 1;
    //console.log(moves);
    //setMoves(moves);

    setMoves(() => {
      return { ...moves, blue: moves.blue + 1 };
    });

    //arr.push("Blue");
    //setArr(arr);
    //console.log(arr);

    setArr(() => {
      return [...arr, "Blue"];
    });
    console.log(arr);
  };

  let updateYellow = () => {
    setMoves(() => {
      return { ...moves, yellow: moves.yellow + 1 };
    });
  };

  let updateRed = () => {
    setMoves(() => {
      return { ...moves, red: moves.red + 1 };
    });
  };

  let updateGreen = () => {
    setMoves(() => {
      return { ...moves, green: moves.green + 1 };
    });
  };

  return (
    <div>
      <h3>Game Begins!</h3>
      <p>{arr}</p>
      <div className='board'>
        <p>Blue Move = {moves.blue}</p>
        <button
          onClick={updateblue}
          style={{ background: "blue" }}>
          +1
        </button>

        <p>Yellow Move = {moves.yellow}</p>
        <button
          onClick={updateYellow}
          style={{ background: "yellow", color: "#000" }}>
          +1
        </button>

        <p>Red Move = {moves.red}</p>
        <button
          onClick={updateRed}
          style={{ background: "red" }}>
          +1
        </button>

        <p>Green Move = {moves.green}</p>
        <button
          onClick={updateGreen}
          style={{ background: "green" }}>
          +1
        </button>
      </div>
    </div>
  );
}
