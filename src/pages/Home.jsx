import React from 'react'
import SidebarBanner from '../components/SidebarBanner'
import FlashSales from '../components/FlashSales'
import Category from '../components/Category'

const Home = () => {
  return (
    <div>
      <SidebarBanner/>
      <FlashSales/> 
      <Category/>
      <FlashSales/> 
    </div>
  )
}

export default Home