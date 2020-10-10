import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Event = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>Hello {loggedInUser.displayName}</h1>
        </div>
    );
};

export default Event;