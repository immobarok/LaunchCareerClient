import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './../firebase/firebase.init';
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [redirectPath, setRedirectPath] = useState('/');
  const [user, setUser] = useState(null)

  const createUser = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', result.user);
    } catch (error) {
      console.error('Error creating user:', error.code, error.message);
    }
  };

  const signInUser = (email, password) => {
    try {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error('Error signin user:', error.code, error.message);
    }
  }
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      if (currentUser?.email) {
        axios.post('https://job-pilot-server-pf92.vercel.app/jwt', { email: currentUser?.email }, { withCredentials: true })
          .then(res => console.log(res.data))
          .catch(error => console.log(error))
      }
      console.log('user in the auth state change ', currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    showLogin,
    setShowLogin,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    loading,
    setLoading,
    user,
    redirectPath,
    setRedirectPath
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider;