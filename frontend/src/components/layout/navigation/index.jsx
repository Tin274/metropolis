import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigation() {
  return (
      <div>
        <ul className="nav-links">   
              <Link to="/index" >Home </Link>
              <input type="text" placeholder="Suche Metropole..."/>
              <Link to="/login" >Login </Link>
              <Link to="/signup" >Signup </Link>
            
        </ul>
    </div>
  )
}
