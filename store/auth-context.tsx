import {createContext, FC, useEffect, useState} from 'react';
import {authenticate} from '../src/util/auth';
import {IAuthContext} from '../constants/interface';
import AsyncStorage from '@react-native-async-storage/async-storage';  

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

const AuthContextProvider: FC<IAuthContext> = ({children}) => {
  const [authToken, setAuthToken] = useState<any>();

 

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token')
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
