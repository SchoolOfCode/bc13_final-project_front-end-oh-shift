import '../styles/globals.css'

import React, {useState, useContext} from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const DarkModeWrapper = React.createContext()

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <DarkModeWrapper.Provider value={{darkMode,setDarkMode}}>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  </DarkModeWrapper.Provider>
  )
}

