import { BrowserRouter, Route, Routes } from "react-router-dom";
import TourMap from "./pages/TourMap/TourMap";
import Home from "./pages/Home/Home";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa" element={<TourMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;