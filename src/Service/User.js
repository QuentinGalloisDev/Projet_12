import { useState, useEffect } from 'react'
import FetchData from './FetchData'

const User = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchData(12);
                // console.log(data[0].data.userInfos.firstName);
                setUser(data[0].data.userInfos.firstName);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    return user
}

export default User



// const [user, setUser] = useState([])
// // test 12 ,18 et
// const getUser = () => fetch(`http://localhost:3000/user/12`)
//     .then(response => response.json())
//     .then(user => {

//         setUser(user.data.userInfos.firstName)

//     })
// useEffect(() => {
//     getUser()
// }, [])
// console.log(user)
// return user