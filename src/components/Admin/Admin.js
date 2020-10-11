import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const Admin = () => {
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    return (
        <div>
            {
                users.map(user => <li> Name: {user.name},&nbsp; Email: {loggedInUser.email}</li>)
            }
        </div>
    );
};

export default Admin;