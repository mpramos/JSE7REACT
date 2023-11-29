import React from 'react'
import './Nav.css'
import Avatar from './Avatar'
import Button from '@mui/material/Button';

const Nav = () => {
  return (
    <article className='nav-container'>
        <Avatar/>
        {/* <section className='nav-items-position'> */}
        <ul className='nav-items-position'>
            <li>Docs</li>
            <li>About</li>
            <li>
            <Button size="small">Small</Button>
            </li>
        </ul>
        {/* </section> */}
    </article>
  )
}

export default Nav