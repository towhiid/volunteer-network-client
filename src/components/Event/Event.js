import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Event = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/tasks?name='+users.name)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h1>Hello {loggedInUser.displayName}</h1>
            {
                users.map(user => <li> Name: {user.name},&nbsp; Email: {loggedInUser.email}</li>)
            }
        </div>
    );
};

export default Event;