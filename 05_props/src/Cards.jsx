import Card from "./Card.jsx";

function Cards() {
  return (
    <div>
      <Card
        title="OPPO F16 PRO"
        price={42000}
      />
      <Card
        title="IDEAPAD Slim 5i"
        price={72000}
      />
      <Card
        title="Narzo 50"
        price={9000}
      />
    </div>
  );
}

export default Cards;
