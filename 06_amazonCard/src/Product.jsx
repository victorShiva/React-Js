/* eslint-disable react/prop-types */
import "./Product.css";
import Price from "./Price";

export default function Product({ title, idx }) {
  let oldPrice = ["2,200", "3,200", "1,500", "72,000"];
  let newPrice = ["1,250", "2,000", "750", "65,500"];
  let description = [
    "Wireless 10 meter",
    "Intentive Suface",
    "Desined for Coders",
    "Exelent Performence",
  ];

  return (
    <div className='card'>
      <h2> {title} </h2>
      <p>{description[idx]}</p>
      <Price
        oldPrice={oldPrice[idx]}
        newPrice={newPrice[idx]}
      />
    </div>
  );
}
