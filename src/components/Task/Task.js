import React from 'react';
import { Link} from 'react-router-dom';

const Task = ({task}) => {
    return (
        <div className = "col-md-3">
            <Link to = {`/register/${task.name}`}>
            <img style = {{height:'300px'}} src={task.pic} alt=""/>
            <h3 className = "text-primary">{task.name}</h3></Link>
        </div>
    );
};

export default Task;