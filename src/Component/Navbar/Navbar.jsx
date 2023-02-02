import React from 'react'
import "./Navbar.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>LOGO</div>
        <div className='user'>
        <PersonOutlineIcon />
        <span>user</span>   
        </div>
    </div>
  )
}

export default Navbar