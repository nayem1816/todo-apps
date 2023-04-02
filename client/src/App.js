import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>
    </div>
  );
}

export default App;
