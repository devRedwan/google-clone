import "./App.css";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
