import { useState, useEffect } from 'react'
import FetchData from './FetchData'

const SessionLength = () => {
    const [sessions, setSessions] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData(12);
                // console.log(data[2].data.sessions);
                setSessions(data[2].data.sessions);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    return sessions
}
export default SessionLength


// const [sessions, setSessions] = useState([])
// const getSessions = () => fetch(`http://localhost:3000/user/12/average-sessions`)
//     .then(response => response.json())
//     .then(session => {
//         setSessions(session.data.sessions)
//     })
// useEffect(() => {
//     getSessions()
// }, [])
// console.log(sessions)
// return sessions