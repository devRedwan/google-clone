import "./App.css";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
