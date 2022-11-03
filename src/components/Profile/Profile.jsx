import "./Profile.css";
import { useEffect } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm';

function Profile(props) {
  useEffect(() => {
    props.handler();
  }, []);

  const PROFILE_DATA = {
    title: `Привет, Ольга!`
  }  

  return (
    <main className='profile'>
      <h1 className='profile__title'>{PROFILE_DATA.title}</h1>
      <ProfileForm />
    </main>
  );
}

export default Profile;