import React from "react";


import { BsPeople } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import './Sidebar.css'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
 

  return (
    <div className="sidebar">
    <ul>
      <NavLink  className='link' to = "/" >
    <li>
     <BsPeople></BsPeople>
     <span>Add Student</span>
     </li>
     </NavLink>
     <NavLink className='link' to= '/table' >
      <li activeClassName='active'>
     <CiBoxList></CiBoxList>
     <span>Manage Student</span>
     </li>
     </NavLink>
   
    
     </ul>
    </div>
  );
};

export default Sidebar;
