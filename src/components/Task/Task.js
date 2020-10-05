import React from 'react';
import { Link, useParams } from 'react-router-dom';
import  '../../Image/images/babySit.png';

const Task = ({task}) => {
    const {id} = useParams();
    return (
        <div className = "col-md-3">
            <Link to = {`/register/${id}`}>
            <img style = {{height:'300px'}} src={require(`../../Image/images/${task.pic}`)} alt=""/>
            <h3 className = "text-primary">{task.name}</h3></Link>
        </div>
    );
};

export default Task;