import React from 'react'

import { Link, Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
      <div className='main'>
          <nav className='nav'>
                 <ul>
                  <li> <Link id='navt' to='/Home'>Home</Link></li>
                  <li><Link id='navt'  to='/About'> About</Link></li>
                  <li><Link id='navt' to='/Services'> Services</Link> </li>
                  <li><Link id='navt' to='/Contactus'>Contact us </Link></li>
                  <li><Link id='navt' to='/Registration'>Registration </Link></li>
                  <li><Link id='navt' to='/Login'>Login </Link></li>
                  
                  </ul>   
          </nav>      
          </div>
          <Outlet/>
    </>
  )
}
