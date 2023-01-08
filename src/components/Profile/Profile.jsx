import "./Profile.css";
import { useContext } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Profile({ logOutHandler, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser)
  const STYLES_CONFIG = {
    profileClassName: "profile",
    titleClassName: "profile__title"
  }
  
  const PROFILE_DATA = {
    title: `Привет, ${currentUser.name}!`,
  };

  return (
    <main className={STYLES_CONFIG.profileClassName}>
      <h1 className={STYLES_CONFIG.titleClassName}>{PROFILE_DATA.title}</h1>
      <ProfileForm currentUser={currentUser} setCurrentUser={setCurrentUser} logOutHandler={logOutHandler} />
    </main>
  );
}

export default Profile;
