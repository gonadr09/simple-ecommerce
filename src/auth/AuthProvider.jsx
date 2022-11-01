// crear provider, es necesario crear el contexto previamente

import React, { useState, useReducer } from 'react'
import { authReducer, initialState } from '../reducers/authReducer'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {

  const [userForm, setUserForm] = useState({username: '', password:''})
  
  //const [userAuth, setUserAuth] = useState({username: '', token: '', isAuth: false})
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{userForm, setUserForm, state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
