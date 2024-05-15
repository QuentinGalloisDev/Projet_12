import calorieIcon from '../Icons/calories-icon.svg'
import proteinIcon from '../Icons/protein-icon.svg'
import carbsIcon from '../Icons/carbs-icon.svg'
import fatIcon from '../Icons/fat-icon.svg'

export const getIconPath = (goalDataName) => {
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