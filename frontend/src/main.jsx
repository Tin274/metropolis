import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { checkUserLoggedStatus } from '../controller/localStorageController'
 */import App from './App'
import './index.css'

/* const userStatus = checkUserLoggedStatus();
 *//* const LoggedStatusContext = createContext(userStatus); */



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <LoggedStatusContext.Provider value={userStatus} > */}
      <App />
   {/*  </LoggedStatusContext.Provider> */}
  </React.StrictMode>
)
