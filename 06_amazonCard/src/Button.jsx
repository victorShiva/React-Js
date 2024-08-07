function printHello() {
  console.log("Button Clicked");
}

function changeColor(e) {
  e.target.style.backgroundColor = "cyan";
}

export default function Buttom() {
  return (
    <div>
      <button
        onClick={printHello}
        onMouseOver={changeColor}>
        Click Me!
      </button>
    </div>
  );
}
