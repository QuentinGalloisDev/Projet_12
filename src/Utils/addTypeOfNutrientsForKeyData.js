export const addTypeOfNutrients = (goalNutrientsName) => {
    if (goalNutrientsName === 'calorieCount') {
        return "Kcal";
    } else if (goalNutrientsName === 'proteinCount' || 'carbohydrateCount' || 'lipidCount') {
        return "g";
    }
}