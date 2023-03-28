import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Page2() {
     return (
          <div>
               Page2
               <br/>
               <NavLink to='/' className='btn btn-danger'>redirect to home</NavLink>
          </div>
     )
}
