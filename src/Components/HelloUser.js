import React, { useEffect, useState } from "react";
import data from '../data'
import { getUser } from "../Service/FetchData"
import PropTypes from 'prop-types';

const HelloUser = ({ user }) => {
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     // Utilisez useEffect pour charger les données de l'utilisateur au montage du composant
    //     const fetchData = async () => {
    //         try {
    //             const res = await getUser(12); // Récupère les données de l'utilisateur
    //             setUserData(res); // Met à jour l'état avec les données récupérées
    //         } catch (error) {
    //             console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
    //         }
    //     };

    //     fetchData(); // Appel de la fonction fetchData
    // }, []);
    // console.log(userData)

    // Rendu conditionnel basé sur l'état de userData
    return (
        <div className='hello_user'>
            {user && (
                <>
                    <h1>Bonjour <span className='user_name'>{user.userInfos.firstName}</span></h1>
                    <p>Félicitation... Vous avez explosé vos objectifs hier 👏</p>
                </>
            )}
        </div>
    );
};
HelloUser.prototype = {
    id: PropTypes.number,
    keyData: PropTypes.object,
    todayScore: PropTypes.number,
    userInfos: PropTypes.object,
}
export default HelloUser;

