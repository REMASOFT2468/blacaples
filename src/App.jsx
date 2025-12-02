import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Hero1 from "./components/Hero1.jsx";
import Hero2 from "./components/Hero2.jsx";
import Hero3 from "./components/Hero3.jsx";
import Hero4 from "./components/Hero4.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </>
  );
}

export default App;
