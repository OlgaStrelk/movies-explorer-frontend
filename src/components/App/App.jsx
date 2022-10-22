import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PATHS } from "../../utils/consts";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";

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
        <Route path={PATHS.profile} element={<Profile />}></Route>
        <Route path={PATHS.movies} element={<Movies />}></Route>
        <Route path={PATHS.savedMovies} element={<SavedMovies />}></Route>
        <Route path={PATHS.signup} element={<Register />}></Route>
        <Route path={PATHS.signin} element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
