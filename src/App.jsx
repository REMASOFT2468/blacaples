import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Pages (Create these files separately) ---
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Documentary from "./pages/Documentary";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/documentary" element={<Documentary />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
