/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Product.css";

//function Product(props) {
//  return (
//    <div className="Product">
//      <h2>{props.title}</h2>
//      <h4>Product Description</h4>
//    </div>
//  );
//}

//function Product({ title, price, features, features2, arr, obj }) {
//  console.log(arr);
//  console.log(obj);
//  return (
//    <div className="Product">
//      <h2>{title}</h2>
//      <h4>Price : {price.toLocaleString("en-IN")}</h4>
//      <p>{features}</p>
//      <p>{features2.a}</p>
//      <i>{arr}</i>
//      <br />
//      <i>{obj.a}</i>
//    </div>
//  );
//}

function Product({ options }) {
  //let list = options.map((option) => <li>{option}</li>);
  return (
    <div className='Product'>
      <h2>Product Description</h2>
      <ul>
        {options.map((option) => (
          <li>{option}</li>
        ))}
      </ul>
    </div>
  );
}
export default Product;
