import React, {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const SystemContext = createContext();

export function SystemProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);

  const contextValue = useMemo(() => ({
    allUsers,
    setAllUsers
  }), [allUsers, setAllUsers]);

  return (
    <SystemContext.Provider value={contextValue}>
      {children}
    </SystemContext.Provider>
  );
}

SystemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
