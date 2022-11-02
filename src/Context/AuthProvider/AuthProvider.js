import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const userContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
      })
    
      return () => {
        unSubscribe()
      }
    }, [])
    

    const authUserInfo = {user,createUser,userLogin}
    
  return (
    <userContext.Provider value={authUserInfo}>
        {children}
    </userContext.Provider>
  )
}

export default AuthProvider