/* eslint-disable react/prop-types */
import "./Card.css";

//function Card({ title, price }) {
//  if (price >= 50000) {
//    return (
//      <div className="card">
//        <h2>{title}</h2>
//        <h4>Price : {price.toLocaleString("en-IN")}</h4>
//        <p>Discount : 5%</p>
//        <button>Buy</button>
//      </div>
//    );
//  } else {
//    return (
//      <div className="card">
//        <h2>{title}</h2>
//        <h4>Price : {price.toLocaleString("en-IN")}</h4>
//        <button>Buy</button>
//      </div>
//    );
//  }
//}

//function Card({ title, price }) {
//  //  let isDiscount = price >= 50000 ? " Discount : 5% " : "";
//  return (
//    <div className="card">
//      <h2>{title}</h2>
//      <h4>Price : {price.toLocaleString("en-IN")}</h4>
//      {/*<p>{price >= 50000 ? " Discount : 5% " : ""}</p>*/}
//      {/*{price >= 50000 ? <p> Discount : 5% </p> : null}*/}
//      {price >= 50000 && <p> Discount : 5% </p>}
//      <button>Buy</button>
//    </div>
//  );
//}

function Card({ title, price }) {
  //let styles = { backgroundColor: "#444", color: "#fff" };
  let styles = { backgroundColor: price >= 50000 ? "#444" : "#923" };
  return (
    <div
      className='card'
      style={styles}>
      <h2>{title}</h2>
      <h4>Price : {price.toLocaleString("en-IN")}</h4>
      {price >= 50000 && <p> Discount : 5% </p>}
      <button>Buy</button>
    </div>
  );
}

//function Card({ title, price }) {
//  let styles = { backgroundColor: "#444", color: "#fff" };
//  return (
//    <div
//      className="card"
//      style={price >= 50000 ? styles : null}>
//      <h2>{title}</h2>
//      <h4>Price : {price.toLocaleString("en-IN")}</h4>
//      {price >= 50000 && <p> Discount : 5% </p>}
//      <button>Buy</button>
//    </div>
//  );
//}

export default Card;
