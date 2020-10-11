import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { Link} from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import event from '../FakeData/FakeData';

const Register = () => {
  const handleAddEvent = () => {
    fetch('https://mysterious-garden-69342.herokuapp.com/addEvent', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(event)
    })
  }
    const [startDate, setStartDate] = useState(new Date());
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className= "reg-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" defaultValue = {loggedInUser.displayName} ref={register({ required: true })} />
      {errors.name && <span className = "error">Name is required</span>}

      <input name="email" defaultValue = {loggedInUser.email} ref={register({ required: true })} />
      {errors.email && <span className = "error">Email is required</span>}

      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      {errors.date && <span className = "error">Date is required</span>}

      <input name="description"  placeholder= "Description" ref={register()} />
      <input name="name" ref={register({ required: true })} />
      {errors.name && <span className = "error">This field is required</span>}
      
      <Link to ="/event">
      <input className = "btn btn-warning" type="submit" />
      </Link>
      <p onClick = {handleAddEvent}></p>
    </form>
  );
};

export default Register;