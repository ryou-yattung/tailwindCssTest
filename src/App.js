import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/aaa";
import Bbb from "./pages/bbb";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Bbb" element={<Bbb />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
