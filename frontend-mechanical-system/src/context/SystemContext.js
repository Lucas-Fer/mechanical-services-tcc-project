import React, {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userLogged, setUserLogged] = useState(false);

  const contextValue = useMemo(() => ({
    allUsers,
    setAllUsers,
    userInfo,
    setUserInfo,
    userLogged,
    setUserLogged
  }), [
    allUsers,
    setAllUsers,
    userInfo,
    setUserInfo,
    userLogged,
    setUserLogged
  ]);

  return (
    <SystemContext.Provider value={contextValue}>
      {children}
    </SystemContext.Provider>
  );
}

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
