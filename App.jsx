import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Search show={show} setShow={setShow}/>
      <Navbar setShow={setShow} />
      <Hero setShow={setShow} />
    </div>
  );
}

export default App;
