import { useState, useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
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
import {
  authorize,
  getProfile,
  register,
  updateProfile,
} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  let navigate = useNavigate();
  // const [token, setToken] = useState("")
  const [infoToolTip, setInfoToolTip] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    verifyToken();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  //log in -> tocken
  const handleLogIn = (data) => {
    authorize(data)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        verifyToken();
        setTimeout(() => navigate(PATHS.movies), 10);
      })

      .catch((err) => {
        if (err === 401) {
          setInfoToolTip(BACKEND_VALIDATION_TEXT.authorizationErrorText);
          openPopup();
        }
        if (err === 409) {
          setInfoToolTip(BACKEND_VALIDATION_TEXT.conflictErrorText);
          openPopup();
        }
        console.log(err);
      });
  };
  //get Profile and get Movies

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setInfoToolTip("");
  };

  const verifyToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getProfile(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch(() => {
          setInfoToolTip("Необходимо заново авторизоваться");
          openPopup();
        });
    }
  };

  const handleRegister = (data) => {
    register(data)
      .then(() => {
        handleLogIn({ email: data.email, password: data.password });
      })
      .catch((err) => {
        if (err === 409) {
          setInfoToolTip(BACKEND_VALIDATION_TEXT.conflictErrorText);
          openPopup();
        }
        console.log(err);
      });
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
  };

  const toggleMenuState = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUpdateProfile = (data) => {
    updateProfile({ email: data.email, name: data.name })
      .then(() => {
        setInfoToolTip("Данные успешно обновлены");
        openPopup();
      })
      .catch((err) => {
        setInfoToolTip({ err });
      });
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <MenuStateContext.Provider value={isMenuOpen}>
          <Header handler={toggleMenuState} isLoggedIn={isLoggedIn} />
          <Routes>
            <Route exact path={PATHS.aboutProject} element={<Main />} />
            <Route
              path={PATHS.profile}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    logOutHandler={handleLogOut}
                    updateProfileHandler={handleUpdateProfile}
                  />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={PATHS.movies}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path={PATHS.savedMovies}
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path={PATHS.signup}
              element={
                <Register
                  infoToolTip={infoToolTip}
                  isOpen={isPopupOpen}
                  onClose={closePopup}
                  handler={handleRegister}
                  isLoggedIn={isLoggedIn}
                />
              }
            ></Route>
            <Route
              path={PATHS.signin}
              element={
                <Login
                  infoToolTip={infoToolTip}
                  isOpen={isPopupOpen}
                  onClose={closePopup}
                  isLoggedIn={isLoggedIn}
                  handler={handleLogIn}
                />
              }
            ></Route>
            <Route path={PATHS.others} element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
          {isMenuOpen && (
            <SideBar
              isLoggedIn={isLoggedIn}
              toggleMenuState={toggleMenuState}
            />
          )}
        </MenuStateContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
