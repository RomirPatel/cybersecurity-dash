import React, { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';

const UserAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          {children}
        </div>
      ) : (
        <p>Please sign in to access the dashboard.</p>
      )}
    </div>
  );
};

export default UserAuth;
