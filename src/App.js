import React from "react";
import "./App.css";

export default function App() {
  console.log("Selamın aleyküm");
  return (
    <div>
      <h2>{new Date().toDateString()}</h2>
      <div>selam gençlik</div>
    </div>
  );
}
