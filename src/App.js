import "./App.css";
// import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App container">
      <Home />
      <Filter>{/* <Cards /> */}</Filter>
      <p className="text-align-right">- Het Parekh</p>
    </div>
  );
}

export default App;
