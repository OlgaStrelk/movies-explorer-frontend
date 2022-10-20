import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PATHS } from "../../utils/consts";
import Movies from '../Movies/Movies';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handler = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handler={handler} />
      <Routes>
        <Route exact path={PATHS.aboutProject} element={<Main />} />
        <Route path={PATHS.profile}></Route>
        <Route path={PATHS.movies} element={<Movies />}></Route>
        <Route path={PATHS.savedMovies}></Route>
        <Route path={PATHS.signup}></Route>
        <Route path={PATHS.signin}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
