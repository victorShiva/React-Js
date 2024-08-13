/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Lottery.css";
import { generateTicket } from "./helper";
import { Ticket } from "./Ticket";
import Button from "./Button";

function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = winCondition(ticket);

  function buyTicket() {
    setTicket(generateTicket(n));
  }
  return (
    <>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulations , you Won!"}</h3>
    </>
  );
}

export { Lottery };
