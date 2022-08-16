import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Css/Common.css";
import "./Css/Mobile.css";
import "./Css/Desktop.css";
import Contact from "./Contact";
import Bio from "./Bio";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
