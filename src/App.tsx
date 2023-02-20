import React from "react";
import "./App.css";
import ListCharacters from "./components/ListCharacters";

// const info = async () => {
//   const { data: res } = await axios.get(
//     "https://rickandmortyapi.com/api/character"
//   );

//   console.log(res.results);
// };

function App() {
  return (
    <>
      <ListCharacters />
    </>
  );
}

export default App;
