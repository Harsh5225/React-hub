import React from 'react'
import { Outlet,Link } from 'react-router'
const Details = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/Details">Details</Link> */}
        <Link to="Hello">Hello</Link>
        <Link to="Hi">Hi</Link>
      </nav>
      <h1>Welcome to details page</h1>
      <Outlet></Outlet>
      
      {/* In React Router, <Outlet /> is used for nested routing to render child components inside a parent route. To define an <Outlet />, */}

      {/* <Hi></Hi>
      <Hello></Hello> 
      <Hello></Hello> 
      inn sab mai se kis ko view karaun wo chiz outlet show karta hai ek time par ek cheez ko 
      Outlet catch karta uss path ko  jisko view karana hai ...
      */}
    </div>
  )
}

export default Details
