export const BASE_URL = "https://api.beatfilms.nomoredomains.icu";
// export const BASE_URL = "http://localhost:3000";

export const MIN_LENGTH = 2
export const MAX_LENGTH = 30
export const IS_EMAIL_REGEX = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

export const BACKEND_VALIDATION_TEXT = {
  conflictErrorText: 'Данный email уже занят',
  // ErrorText: 'При аутентификации пользователя',
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
