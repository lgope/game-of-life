import "./App.css";
import Header from "./Components/Header";
import GameBoard from "./Components/GameBoard";
import { Fragment } from "react";

const App = () => (
  <Fragment>
    <Header />
    <GameBoard />
  </Fragment>
);

export default App;
