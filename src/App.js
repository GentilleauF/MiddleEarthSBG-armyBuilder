import HOME from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <div className="content">
          <HOME/>
        </div>

      </header>
    </div>
  );
}

export default App;
