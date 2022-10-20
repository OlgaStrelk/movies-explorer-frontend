import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handler = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handler={handler} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
