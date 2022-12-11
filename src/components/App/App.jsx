import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { MenuStateContext } from "../../contexts/MenuStateContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PATHS, BACKEND_VALIDATION_TEXT } from "../../utils/consts";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import SideBar from "../SideBar/SideBar";
import { authorize, register } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogIn = (data) => {
    authorize(data)
      .then((token) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(`${BACKEND_VALIDATION_TEXT.loginErrorText} ${err}`);
      });
  };

  const handleRegister = (data) => {
    register(data)
      .then((res) => {
        handleLogIn({ email: data.email, password: data.password });
      })
      .catch((err) => {
        console.log(`${BACKEND_VALIDATION_TEXT.registerErrorText} ${err}`);
      });
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
                element={<ProtectedRoute><Profile logOutHandler={handleLogOut} /></ProtectedRoute>}
              ></Route>
              <Route
                path={PATHS.movies}
                element={<ProtectedRoute><Movies handler={handleLogIn} /></ProtectedRoute>}
              ></Route>
              <Route
                path={PATHS.savedMovies}
                element={<ProtectedRoute><SavedMovies handler={handleLogIn} /></ProtectedRoute>}
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
