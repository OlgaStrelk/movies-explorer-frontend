import "./Profile.css";
import { useEffect } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { getProfile } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Profile({ logOutHandler }) {
  const currentUser = CurrentUserContext();

  // useEffect(() => {
  //   getProfile()
  //     .then((data) => {
  //       setCurrentUser(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const PROFILE_DATA = {
    title: `Привет, ${currentUser.name}!`,
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{PROFILE_DATA.title}</h1>
      <ProfileForm currentUser={currentUser} logOutHandler={logOutHandler} />
    </main>
  );
}

export default Profile;
