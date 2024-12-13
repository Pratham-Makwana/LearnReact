import "./App.css";
import Card from "./components/Card";

function App() {
  let myObject = {
    name: "pratham",
    age: 22,
  };

  let arr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4 ">
        Talwind JS!
      </h1>

      <Card username="Pratham" btnText="click me" />
      <Card username="Rahul" btnText="visit me" />
    </>
  );
}

export default App;
