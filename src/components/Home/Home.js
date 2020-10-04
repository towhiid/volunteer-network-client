import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
             <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h3>
            <nav className="navbar navbar-light bg-light">
            <Form inline className = "p-3" style = {{marginLeft:"500px"}}>
      <FormControl className = 'search' type="text" placeholder="Search"/>
    </Form>
    </nav>
        </div>
    );
};

export default Home;