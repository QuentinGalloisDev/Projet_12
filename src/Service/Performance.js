import { useState, useEffect } from 'react'
import FetchData from './FetchData'
const PerformanceService = () => {
    const [perf, setPerf] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData(12);
                // console.log(data[3].data.data);
                setPerf(data[3].data.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    // console.log(perf)
    return perf


}
export default PerformanceService


// fetch(`http://localhost:3000/user/12/performance `)
//         .then(response => response.json())
//         .then(performance => {
//             console.log(performance.data)


//         })