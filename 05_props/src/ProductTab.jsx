import Product from "./Product";

//function ProductTab() {
//  let options = ["Hi-tech", "Durable", "Fast"];
//  let options2 = { a: "Hi-tech", b: "Durable", c: "Fast" };
//  return (
//    <div className='cardGoup'>
//      <Product
//        title='phone'
//        price={20000}
//        features={options}
//        features2={options2}
//        arr={["Blue", "Red", "Yellow"]}
//        obj={{ a: "Blue", b: "Red", c: "Yellow" }}
//      />

//      {/*<Product
//        title="Laptop"
//        price={40000}
//      />
//      <Product
//        title="Pen"
//        price={20}
//      />*/}
//    </div>
//  );
//}

function ProductTab() {
  let elementArr = ["First", "Second", "Third"];
  return (
    <div>
      <Product options={elementArr} />
    </div>
  );
}

export default ProductTab;
