import "./Profile.css";
import { useEffect } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm';

function Profile(props) {
  useEffect(() => {
    props.handler();
  }, []);

  return (
    <main className='profile'>
      <ProfileForm />
    </main>
  );
}

export default Profile;