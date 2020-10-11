import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Task from '../Task/Task';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {
    const [event, setEvent] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div>
             <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h3>
        <nav className="navbar navbar-light bg-light">
            <Form inline className = "p-3" style = {{marginLeft:"500px"}}>
            <FormControl className = 'search' type="text" placeholder="Search"/>
            </Form>
        </nav>
        <div className="row">
            {
                event.map(task => <Task key = {task.name} task={task}></Task>)
            }
        </div>
        </div>
    );
};

export default Home;