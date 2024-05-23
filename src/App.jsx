import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <span className="container">
        <Card k={"Card1"} price={0} mod={"FREE"} num={4} />
        <Card key={"Card2"} price={9} mod={"PLUS"} num={7} />
        <Card key={"Card3"} price={49} mod={"PRO"} num={8} />
      </span>
    </>
  );
}

export default App;
