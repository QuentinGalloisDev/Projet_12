import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Banner from './Components/Banner';
import Score from './Components/Score';
import Performance from './Components/Performance';
import DailyActivity from './Components/DailyActivity';
import SideBar from './Components/SideBar';
import HelloUser from './Components/HelloUser'
import SessionLength from './Components/SessionLength'
import GalleryUserKeyData from './Components/GalleryUserKeyData';
export default function App() {
  return (
    <div className='container'>
      <Banner></Banner>
      <SideBar></SideBar>
      <div className='body'>
        <HelloUser />
        <div className='charts'>
          <DailyActivity />
          <SessionLength />

          <Performance />
          <Score />


        </div>
        <GalleryUserKeyData />

      </div>
    </div>
  )
}


