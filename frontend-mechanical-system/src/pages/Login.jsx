import React, { useContext, useEffect } from 'react'

import { SystemContext } from '../context/SystemContext';
import { getAllUser } from '../services/userRequest';

import Button from 'react-bootstrap/Button';

export default function Login() {
  const { setAllUsers, allUsers } = useContext(SystemContext);


  const updateAllUsers = async () => {
    const { data } = await getAllUser();
    setAllUsers(data);
  }

  useEffect(() => updateAllUsers(), []);

  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </>
  )
}
