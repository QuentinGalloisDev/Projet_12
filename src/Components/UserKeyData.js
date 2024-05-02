import React from 'react'
import PropTypes from 'prop-types';
// importer les données de keydata dans USER_MAIN_DATA 
// et faire un map pour créer une div avec l'icone associé sur chaque donnée du tableau.
// Mettre en param un mot pour l'adresse du chemin src de l'icone 
const UserKeyData = ({ icon, goalData, goalDataName }) => {

    return (
        <div className='goal_data'>
            <img src={`${icon}`} alt={`icone de ${goalDataName}`} ></img>
            <p>{goalData} <span>{goalDataName}</span></p>
        </div>
    )
}
export default UserKeyData

UserKeyData.protoTypes = {
    icon: PropTypes.string.isRequired,
    goalData: PropTypes.string.isRequired,
    goalDataName: PropTypes.string.isRequired
}