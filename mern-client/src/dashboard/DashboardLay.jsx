import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
const DashboardLay = () => {
  return (
    <div className='px-2 md:px-24 flex mt-24 gap-4 flex-col md:flex-row '>
      <SideBar/>
      <Outlet/>
      
    </div>
  )
}

export default DashboardLay
