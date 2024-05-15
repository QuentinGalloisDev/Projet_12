export const nutrientTypeFr = (nutrientsName) => {
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