import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const MenuMe = () => {
  return (
    <nav>
      <ul>
        <li>
         {/* <Link to='/'> Home </Link> */}
         <NavLink 
         style={({isActive})=>({color: isActive ? 'red':'blue'})}
         to={"/"}>Home</NavLink>
        </li>
        <li>
         <NavLink 
         style={({isActive})=>({color: isActive ? 'red':'blue'})}
         to={"/blog"}>Blog</NavLink>
         {/* <Link to='/blog'> Blog </Link> */}
        
        </li>
        <li>
         {/* <Link to='/profile'> Profile </Link> */}
         <NavLink 
         style={({isActive})=>({color: isActive ? 'red':'blue'})}
         to={"/profile"}>Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuMe