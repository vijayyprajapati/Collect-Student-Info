import Login from "./pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./Component/Sidebar/Sidebar";



function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
     
      {/* <h1>Home</h1> */}
        {/* <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path= "/home" element={<Home />} />
        </Routes> */}
        <Home />
        
      
    </div>
  );
}

export default App;
