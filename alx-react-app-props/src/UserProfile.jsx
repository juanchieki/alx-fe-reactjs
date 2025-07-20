import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const contextData = useContext(UserContext);

  return (
    <div>
      <p>Name: {contextData.name}</p>
      <p>Email: {contextData.email}</p>
    </div>
  );
}

export default UserProfile;
