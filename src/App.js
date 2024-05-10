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
  useEffect(() => {
    // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
    const fetchData = async () => {
      try {
        const res = await getUser(12);
        // Formattage de l'objet avec todayScore * 100
        if (res.data.todayScore) {
          res.data.todayScore = res.data.todayScore * 100
        }
        else if (res.data.score) {
          console.log(res.data.score)
          res.data.score = res.data.score * 100
        }
        // Récupère les données de l'utilisateur
        setUserData(res.data); // Met à jour l'état avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      }
    };

    fetchData(); // Appel de la fonction fetchData
  }, []);
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
        <GalleryUserKeyData />

      </div>
    </div>
  )
}


