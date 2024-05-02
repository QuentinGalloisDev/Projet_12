import { useState, useEffect } from 'react'
import FetchData from './FetchData'

const DailyActivityService = () => {
    const [activity, setActivity] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData(12);
                // console.log(data[1].data.sessions);
                setActivity(data[1].data.sessions);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    return activity
}
export default DailyActivityService