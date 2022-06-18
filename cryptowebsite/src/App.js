import React from "react";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
