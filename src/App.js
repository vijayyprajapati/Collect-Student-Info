import Login from "./pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import DataTable from "./Component/DataTable/DataTable.jsx"
import Sidebar from "./Component/Sidebar/Sidebar";
import Navbar from "./Component/Navbar/Navbar";
import StudentDetail from "./Component/StudenDetail/StudentDetail";
import ManageTable from "./pages/ManageTable/ManageTable";


function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
     
      
        <Routes>
          
          {/* <Route path="/" element={<Login />} /> */}
          <Route path= "/" element={<Home />} />
          <Route path= "/table" element={< ManageTable/>} />
        </Routes>
        
        
        {/* <Sidebar /> */}
        {/* <Navbar /> */}
        {/* <StudentDetail /> */}
        {/* <DataTable /> */}
        
      
    </div>
  );
}

export default App;
