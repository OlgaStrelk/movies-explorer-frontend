import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { MenuStateContext } from "../../contexts/MenuStateContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
import { authorize, register } from "../../utils/MainApi";

function App() {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogIn = (data) => {
    authorize(data).then((token) => {
      setCurrentUser(data);
      setLoggedIn(true);
      console.log(token);
    });
  };

  const handleRegister = (data) => {
    register(data)
      .then((res) => {
        handleLogIn({ email: data.email, password: data.password });
      })
      .catch(() => {});
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    // setCurrentUser({})
  };

  const toggleMenuState = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
              <Route
                path={PATHS.signup}
                element={<Register handler={handleRegister} />}
              ></Route>
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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
