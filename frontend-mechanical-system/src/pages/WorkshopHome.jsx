import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import WorkshopHeader from '../components/WorkshopHeader'
import { SystemContext } from '../context/SystemContext';

export default function WorkshopHome() {

  const { userInfo, userLogged } = useContext(SystemContext);

  let history = useHistory();

  useEffect(() => {
    if (!userInfo || !userLogged) history.push('/');
  }, []);

  return (
    <>
      <WorkshopHeader />
    </>
  )
}
