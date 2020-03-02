import { useState, useEffect } from 'react';
import Auth from '../firebase/Auth';

const useAuthentication = () => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('auth')));
  useEffect(() => {
    const listener = Auth.onAuthUserListener(user => {
      user ? localStorage.setItem('auth', JSON.stringify(user)) : localStorage.removeItem('auth');
      setAuthUser(user);
    });

    return () => {
      listener();
    };
  }, []);

  return authUser;
};

export default useAuthentication;
