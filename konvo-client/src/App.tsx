import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div />} />
      </Routes>
    </Router>
  );
};

export default App;
