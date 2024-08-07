import Product from "./Product";

export default function ProductTab() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Product
        title='Logitech Mouse'
        idx={0}
      />
      <Product
        title='Apple Pencil (2nd gen)'
        idx={1}
      />
      <Product
        title='Zebranic Keyboard'
        idx={2}
      />
      <Product
        title='Lenovo Ideapad series'
        idx={3}
      />
    </div>
  );
}
