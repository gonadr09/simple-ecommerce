import React, { useState, useReducer } from 'react'
import { authReducer, initialAuthReducer, initialState, TYPES } from '../reducers/authReducer'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {

  const [userForm, setUserForm] = useState({username: '', password:''})
  
  const [state, dispatch] = useReducer(authReducer, initialState, initialAuthReducer)

  const login = (userData) => {
    localStorage.setItem('auth', JSON.stringify(userData))
    dispatch({type: TYPES.LOGIN, payload: userData})
  }

  const logout = () => {
    localStorage.clear()
    dispatch({type: TYPES.LOGOUT})
  }

  return (
    <AuthContext.Provider value={{userForm, setUserForm, state, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
