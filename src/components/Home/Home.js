import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Task from '../Task/Task';
import tasks from '../FakeData/FakeData';


const Home = () => {
    const handleAddEvent = () => {
        const task = [...tasks]
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({task})
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }
    return (
        <div>
             <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h3>
        <nav className="navbar navbar-light bg-light">
            <Form inline className = "p-3" style = {{marginLeft:"500px"}}>
            <FormControl className = 'search' type="text" placeholder="Search"/>
            </Form>
        </nav>
        <div className="row" onClick = {handleAddEvent}>
            {
                tasks.map(task => <Task key = {task.name} task={task}></Task>)
            }
        </div>
        </div>
    );
};

export default Home;