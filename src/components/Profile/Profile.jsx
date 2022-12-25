import "./Profile.css";
import { useContext } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Profile({ logOutHandler }) {
  const currentUser = useContext(CurrentUserContext);

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
