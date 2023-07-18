import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Opening from "./Pages/Opening";
import Home from "./Pages/Home";

import UseAudio from "./Components/UseAudio";

import "./styles/main.css";
import audioBacksound from "./assets/backsound.mp3";

function App() {
  const [playing, toggleSound] = UseAudio(audioBacksound);
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Opening soundPlaying={playing} toggle={toggleSound} />}
            />
            <Route path="/main/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
