// export const BASE_URL = "https://api.beatfilms.nomoredomains.icu";
export const BASE_URL = "http://localhost:3002";

export const MIN_LENGTH = 2
export const MAX_LENGTH = 30
export const IS_ALPHANUM_REGEX = /^[a-zA-Z0-9]+$/

export const BACKEND_VALIDATION_TEXT = {
  conflictErrorText: 'К сожалению, этот email уже занят',
  badRequestErrorText: 'Введенный вами email некорректен',
}

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
      headerClassName: "auth-bar__list-item_type_signup",
    },
    {
      title: "Войти",
      id: 5,
      path: PATHS.signin,
      headerListItemClassName: "auth-bar__list-item_type_signin",
      headerLinkClassName: "auth-bar__link_type_signin"
    },
  ],
};

export const token = localStorage.getItem("jwt")