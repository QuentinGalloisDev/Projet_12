export const numberWithCommas = (x) => {
    // Avec la regex on cherche les groupes de 3 chiffres qui ne sont pas précédés d'un début de nombre 
    // Et on le remplace par le chiffre trouvé suivi d'une virgule.
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}