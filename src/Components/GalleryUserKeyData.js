import React from 'react'
import PropTypes from 'prop-types';
import { USER_MAIN_DATA } from '../data'
import UserKeyData from './UserKeyData'
import calorieIcon from '../Icons/calories-icon.svg'
import proteinIcon from '../Icons/protein-icon.svg'
import carbsIcon from '../Icons/carbs-icon.svg'
import fatIcon from '../Icons/fat-icon.svg'

const GalleryUserKeyData = () => {

    let userKeyData = USER_MAIN_DATA[0].keyData
    userKeyData = Object.entries(userKeyData)
    // console.log(userKeyData)

    // mettre les icones associée à chaque UserKeyData suivant le nom de la donnée détecté en condition 
    // et mettre le chemin de l'url en fonction.

    const getIconPath = (goalDataName) => {
        switch (goalDataName) {
            case "calorieCount":
                return calorieIcon;
            case "proteinCount":
                return proteinIcon;
            case "carbohydrateCount":
                return carbsIcon;
            case 'lipidCount':
                return fatIcon
            default:
                break;
        }
    }

    // Créer une fonction avec en param le nom de la goalData pour ajouter Kcal ou g après la valeur numériques
    const addTypeOfNutrients = (goalNutrientsName) => {
        if (goalNutrientsName === 'calorieCount') {
            return "Kcal";
        } else if (goalNutrientsName === 'proteinCount' || 'carbohydrateCount' || 'lipidCount') {
            return "g";
        }
    }

    // Créer une fonction avec en param le nom de la donnée et la transformer en fr.
    const nutrientTypeFr = (nutrientsName) => {
        switch (nutrientsName) {
            case 'calorieCount':
                return "calories";
            case 'proteinCount':
                return "protéines";
            case 'carbohydrateCount':
                return "lipides";
            case 'lipidCount':
                return "glucides";



            default:
                break;
        }
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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


}