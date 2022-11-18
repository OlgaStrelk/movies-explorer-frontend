export const PATHS = {
  aboutProject: "/",
  movies: "/movies",
  savedMovies: "/saved-movies",
  signup: "/signup",
  signin: "/signin",
  profile: "/profile",
  others: "/*",
};

export const NAVIGATION_DATA = {
  loggedInLinks: [
    {
      title: "Главная",
      id: 1,
      path: PATHS.aboutProject,
      className: "",
    },
    {
      title: "Фильмы",
      id: 2,
      path: PATHS.movies,
    },
    {
      title: "Сохранённые фильмы",
      id: 3,
      path: PATHS.savedMovies,
      className: "",
    },
  ],

  authLinks: [
    {
      title: "Регистрация",
      id: 4,
      path: PATHS.signup,
      headerClassName: "auth-bar__link_type_signup",
    },
    {
      title: "Войти",
      id: 5,
      path: PATHS.signin,
      headerClassName: "auth-bar__link_type_signin",
    },
  ],
};
