import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigation() {
  return (
      <div>
        <ul className="nav-links">   
              <Link to="/index" >Home </Link>
              <Link to="/login" >Login </Link>
              <Link to="/detail" >Detail </Link>
             <Link to="/signup" >Signup </Link>
        </ul>
    </div>
  )
}
