import React from 'react'

import CartImage from '../images/login.png'

import { useLocation } from 'react-router-dom';
import CheckMailContainer from '../components/CheckMailContainer'
import AuthPage from './AuthPage'


const CheckMailPage = () => {
  const loc = useLocation();
  const email = loc.state?.email;
  return (
    <AuthPage container={<CheckMailContainer email={email} />} image={CartImage} />
  )
}

export default CheckMailPage