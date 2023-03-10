import { Table } from '@mui/material'
import React from 'react'

import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

import StudenDetail from '../../Component/StudenDetail/StudentDetail'
import "./Home.css"



function Home() {
  return (
    <div>
        <Navbar />
        <div className='container'>
          <div className='sidebar'><Sidebar /></div>
          
          <div className='studentDetail'><StudenDetail /></div>
       
        
            </div>  
    </div>
  )
}

export default Home