/* eslint-disable react/prop-types */
import TicketNum from "./TicketNum";

export function Ticket({ ticket }) {
  return (
    <>
      <h1> Lottery Game ! </h1>
      <div className='ticket'>
        {ticket.map((num, idx) => {
          return (
            <TicketNum
              num={num}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
}
