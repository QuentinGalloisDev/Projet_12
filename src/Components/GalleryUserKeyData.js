import React from "react";
import PropTypes from 'prop-types';
import UserKeyData from './UserKeyData'
import { getIconPath } from "../Utils/getIconPathForKeyData";
import { addTypeOfNutrients } from "../Utils/addTypeOfNutrientsForKeyData";
import { nutrientTypeFr } from "../Utils/nutrientTypeFrForKeyData";
import { numberWithCommas } from "../Utils/numberWithCommasForKeyData";
// import user dans le app comme score
const GalleryUserKeyData = ({ userKeyData }) => {
    return (
        <ul className='user_key_datas'>
            {userKeyData.map((key) => (

                <li key={key[0]} >
                    {/* Passer les données de keyData en tant que props à UserKeyData */}
                    <UserKeyData
                        icon={getIconPath(key[0])}
                        goalData={`${numberWithCommas(key[1])}${addTypeOfNutrients(key[0])}`}
                        goalDataName={`${nutrientTypeFr(key[0])}`} />
                </li>
            ))}
        </ul>
    )
}

export default GalleryUserKeyData

UserKeyData.protoTypes = {
    // Exemple :
    // [
    //    ['calories', 2000],
    //    ['protéines', 100],
    //    ['glucides', 300],
    // ]

    userKeyData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]))).isRequired

}