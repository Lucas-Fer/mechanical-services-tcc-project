import React, {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const contextValue = useMemo(() => ({
    allUsers,
    setAllUsers,
    userInfo,
    setUserInfo
  }), [
    allUsers,
    setAllUsers,
    userInfo,
    setUserInfo
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
