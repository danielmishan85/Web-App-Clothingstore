import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePageContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="HomePage">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
