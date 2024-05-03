
let cachedData = null;

const FetchData = async (userId) => {

    try {
        if (cachedData) {
            return cachedData;
        }
        const urls = [
            `http://localhost:3000/user/${userId}`,
            `http://localhost:3000/user/${userId}/activity`,
            `http://localhost:3000/user/${userId}/average-sessions`,
            `http://localhost:3000/user/${userId}/performance`
        ];

        // Effectue toutes les requêtes en parallèle
        const responses = await Promise.all(urls.map(url => fetch(url)));

        // Transforme les réponses en JSON
        const data = await Promise.all(responses.map(response => response.json()));

        cachedData = data;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}



export default FetchData