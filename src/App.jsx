import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Footer from "./components/Footer";

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
