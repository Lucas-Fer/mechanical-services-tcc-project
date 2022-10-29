import React, {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);

  const [loggedUser, setLoggedUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  const contextValue = useMemo(() => ({
    loggedUser,
    setLoggedUser,
    allUsers,
    setAllUsers
  }), [loggedUser]);

  return (
    <SystemContext.Provider value={contextValue}>
      {children}
    </SystemContext.Provider>
  );
}

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
