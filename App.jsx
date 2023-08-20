import React from "react";
import "./index.css";

// import Menu from "./Menu";
import SeachBar from "./SearchBar";
import Images from "./Images";

function App() {
  return (
    <>
      <SeachBar />
      <h1 className="tagLine">Delivering Cravings at Your Convenience</h1>
      <Images />
    </>
  );
}
export default App;
