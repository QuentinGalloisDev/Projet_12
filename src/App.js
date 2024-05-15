import './App.css';
import React, { useEffect, useState } from "react";
import Banner from './Components/Banner';
import Score from './Components/Score';
import Performance from './Components/Performance';
import DailyActivity from './Components/DailyActivity';
import SideBar from './Components/SideBar';
import HelloUser from './Components/HelloUser'
import SessionLength from './Components/SessionLength'
import GalleryUserKeyData from './Components/GalleryUserKeyData';
import { getUser } from "./Service/FetchData";

export default function App() {

  const [userData, setUserData] = useState(null);
  const [userKeyData, setUserKeyData] = useState([]);

  useEffect(() => {
    // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
    const fetchData = async () => {

      try {
        const res = await getUser(process.env.REACT_APP_ID_USER);
        // Formattage de l'objet avec todayScore * 100
        if (res.data.todayScore) {
          res.data.todayScore = res.data.todayScore * 100
        }
        else if (res.data.score) {
          res.data.score = res.data.score * 100
        }
        else {
          res.data.score = null
        }
        setUserData(res.data); // Met à jour l'état avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      }
    };

    fetchData(); // Appel de la fonction fetchData
  }, []);

  useEffect(() => {
    if (userData) {
      //Formattage KeyData
      let keyData = userData.keyData
      keyData = Object.entries(keyData)
      setUserKeyData(keyData)
      //Formattage KeyData
    }
  }, [userData]);

  return (
    <div className='container'>
      <Banner></Banner>
      <SideBar></SideBar>
      <div className='body'>
        <HelloUser user={userData} />
        <div className='charts'>
          <DailyActivity />
          <SessionLength />

          <Performance />
          <Score user={userData} />


        </div>
        <GalleryUserKeyData userKeyData={userKeyData} />

      </div>
    </div>
  )
}


