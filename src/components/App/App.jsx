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
import PageNotFound from "../PageNotFound/PageNotFound"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handler = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path={PATHS.aboutProject} element={<Main />} />
        <Route
          path={PATHS.profile}
          element={<Profile handler={handler} />}
        ></Route>
        <Route
          path={PATHS.movies}
          element={<Movies handler={handler} />}
        ></Route>
        <Route
          path={PATHS.savedMovies}
          element={<SavedMovies handler={handler} />}
        ></Route>
        <Route path={PATHS.signup} element={<Register />}></Route>
        <Route path={PATHS.signin} element={<Login />}></Route>
        <Route path={PATHS.others} element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
