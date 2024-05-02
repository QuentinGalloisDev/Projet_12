import { useState, useEffect } from 'react'
import FetchData from './FetchData'

const Score = () => {
    const [score, setScore] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData(12);
                // console.log(data[0].data);
                setScore(data[0].data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    // Formattage provisoire pour que todayScore soit * 100
    score.todayScore = score.todayScore * 10
    return score
}
export default Score


// const [score, setScore] = useState([])
// const getScore = () =>
//     fetch(`http://localhost:3000/user/12`)
//         .then(response => response.json())
//         .then(score => {
//             setScore(score.data)
//         })
// useEffect(() => {
//     getScore()
// }, [])
// console.log(score)
// // Formattage provisoire pour que todayScore soit * 100
// score.todayScore = score.todayScore * 10
// return score