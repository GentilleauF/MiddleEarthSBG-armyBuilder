import About from "./components/About/About";
import CharacterPage from "./components/minisRelated/CharacterPage";
import HOME from "./components/Home";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MesFigurinnes from "./components/mesFigurinnes/MesFigurines";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="content">
          <Routes>
            <Route path='/' element={<HOME/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/myMinis" element={<MesFigurinnes/>} />
            <Route path="/characterPage/:id" element={<CharacterPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
