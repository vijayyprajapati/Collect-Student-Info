import React from "react";

import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

const Sidebar = () => {
 

  return (
    <div className="sidebar">
    <ul>
    <li>
     <BsPeople></BsPeople>
     <span>Student</span>
     </li>
      <li>
     <CiBoxList></CiBoxList>
     <span>Manage Student</span>
     </li>
   
    
     </ul>
    </div>
  );
};

export default Sidebar;
