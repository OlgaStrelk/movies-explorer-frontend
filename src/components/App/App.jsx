import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { MenuStateContext } from "../../contexts/MenuStateContext";

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
import PageNotFound from "../PageNotFound/PageNotFound";
import SideBar from "../SideBar/SideBar";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  const toggleMenuState = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LoggedInContext.Provider value={isLoggedIn}>
        <MenuStateContext.Provider value={isMenuOpen}>
          <Header handler={toggleMenuState} />
          <Routes>
            <Route exact path={PATHS.aboutProject} element={<Main />} />
            <Route
              path={PATHS.profile}
              element={<Profile logOutHandler={handleLogOut} />}
            ></Route>
            <Route
              path={PATHS.movies}
              element={<Movies handler={handleLogIn} />}
            ></Route>
            <Route
              path={PATHS.savedMovies}
              element={<SavedMovies handler={handleLogIn} />}
            ></Route>
            <Route path={PATHS.signup} element={<Register />}></Route>
            <Route
              path={PATHS.signin}
              element={<Login handler={handleLogIn} />}
            ></Route>
            <Route path={PATHS.others} element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
          {isMenuOpen && <SideBar toggleMenuState={toggleMenuState} />}
        </MenuStateContext.Provider>
      </LoggedInContext.Provider>
    </>
  );
}

export default App;
