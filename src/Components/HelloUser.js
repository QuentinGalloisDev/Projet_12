import React from "react";
import PropTypes from 'prop-types';

const HelloUser = ({ user }) => {
    // Rendu conditionnel basé sur l'état de userData
    return (
        <div className='hello_user'>
            {user && (
                <>
                    <h1>Bonjour <span className='user_name'>{user.userInfos.firstName}</span></h1>
                    <p>Félicitation... Vous avez explosé vos objectifs hier 👏</p>
                </>
            )}
        </div>
    );
};

HelloUser.prototype = {
    id: PropTypes.number,
    keyData: PropTypes.object,
    todayScore: PropTypes.number,
    userInfos: PropTypes.object,
}
export default HelloUser;

