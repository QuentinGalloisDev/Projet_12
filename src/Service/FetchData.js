// import React, { useEffect, useState } from "react";



// export const GetUser = (userId) => {
//     const [movie, setMovie] = useState([])

//     const getUser = () => fetch(`http://localhost:3000/user/${userId}`)
//         .then(response => response.json())
//         .then(user => {
//             setMovie(user)

//         })
//     useEffect(() => {
//         getUser()
//     }, [])
//     console.log(movie);
//     return movie



//     // const response = fetch(`http://localhost:3000/user/${userId}`);
//     // const dataUser = response.json();
//     // console.log(dataUser)
//     // return dataUser;

// };



export const getUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la requête fetch');
        }
        const dataUser = await response.json();
        return dataUser;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

export const getUserActivity = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error('Erreur lors de la requête fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

export const getUserAverageSessions = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error('Erreur lors de la requête fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

export const getUserPerformance = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error('Erreur lors de la requête fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};



