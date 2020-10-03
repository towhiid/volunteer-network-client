import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <Form inline className = "p-3" style = {{marginLeft:"500px"}}>
      <FormControl className = 'search' type="text" placeholder="Search"/>
    </Form>
    </nav>
        </div>
    );
};

export default Home;