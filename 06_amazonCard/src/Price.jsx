/* eslint-disable react/prop-types */
export default function Price({ oldPrice, newPrice }) {
  let FontWei = { fontWeight: "800" };
  let styles = {
    backgroundColor: "#ed4155",
    height: "50px",
    color: "#fef",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={FontWei}>{newPrice}</span>
    </div>
  );
}
