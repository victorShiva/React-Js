import "./App.css";

function Heading() {
  return <h1>This is a First Heading!</h1>;
}

function Title() {
  return <h3>This is a First Title!</h3>;
}

//function App() {
//  return <Title />;
//}

function App() {
  return (
    <div>
      <Heading />
      <Title />
      <Title />
      <p>This is paragraph.</p>
    </div>
  );
}

export default App;
