import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

import "./App.css";
import { Navbar } from "@material-tailwind/react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the route for the HomePage */}
        <Route path="/" element={<Homepage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
