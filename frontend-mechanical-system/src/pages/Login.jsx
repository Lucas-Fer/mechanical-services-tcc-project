import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { SystemContext } from '../context/SystemContext';


export default function Login() {
  const { setAllUsers, allUsers } = useContext(SystemContext);


  const updateAllUsers = () => {
    setAllUsers(allUsers);
  }

  useEffect(() => updateAllUsers, []);

  return (
    <div>Login</div>
  )
}
