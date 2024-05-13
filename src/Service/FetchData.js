import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data";

export const getUser = async (userId) => {
    if (process.env.REACT_APP_IS_MOCKED_DATA === 'false') {
        try {

            const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`);
            if (!response.ok) {
                throw new Error('Erreur lors de la requête fetch');
            }
            const dataUser = await response.json();
            return dataUser;
        }


        catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }
    else {
        return { data: USER_MAIN_DATA[0] };
    }
}



export const getUserActivity = async (userId) => {
    try {
        if (process.env.REACT_APP_IS_MOCKED_DATA === 'false') {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/activity`);
            if (!response.ok) {
                throw new Error('Erreur lors de la requête fetch');
            }
            const data = await response.json();
            return data;
        }
        else {
            return { data: USER_ACTIVITY[0] };
        }
    }
    catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

export const getUserAverageSessions = async (userId) => {
    try {
        if (process.env.REACT_APP_IS_MOCKED_DATA === 'false') {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/average-sessions`);
            if (!response.ok) {
                throw new Error('Erreur lors de la requête fetch');
            }
            const data = await response.json();
            return data;
        }
        else {
            return { data: USER_AVERAGE_SESSIONS[0] };
        }
    }
    catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

export const getUserPerformance = async (userId) => {
    try {
        if (process.env.REACT_APP_IS_MOCKED_DATA === 'false') {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/performance`);
            if (!response.ok) {
                throw new Error('Erreur lors de la requête fetch');
            }
            const data = await response.json();
            return data;
        }
        else {
            return { data: USER_PERFORMANCE[0] };
        }
    }
    catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};



