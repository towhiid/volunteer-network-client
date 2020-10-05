import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Task from '../Task/Task';

const tasks = [
    {
        name: 'Baby Sitter',
        pic: 'babySit.png'
    },
    {
        name: 'Good Education',
        pic: 'goodEducation.png'
    },
    {
        name: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        name: 'Bird House',
        pic: 'birdHouse.png'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        name: 'Extra Volunteer',
        pic: 'extraVolunteer.png'
    },
    {
        name: 'Drive Safety',
        pic: 'driveSafety.png'
    },
    {
        name: 'Clean Water',
        pic: 'cleanWater.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Cloth Swap',
        pic: 'clothSwap.png'
    },
    {
        name: 'Clean Park',
        pic: 'cleanPark.png'
    },
    {
        name: 'IT Help',
        pic: 'ITHelp.png'
    },
    {
        name: 'Vote Register',
        pic: 'voteRegister.png'
    },
    {
        name: 'Refugee Shelter',
        pic: 'refuseShelter.png'
    },
    {
        name: 'New Books',
        pic: 'newBooks.png'
    },
    {
        name: 'Music Lessons',
        pic: 'musicLessons.png'
    },
    {
        name: 'Library Books',
        pic: 'libraryBooks.png'
    },
    {
        name: 'River Clean',
        pic: 'riverClean.png'
    },
    {
        name: 'Stuffed Animals',
        pic: 'stuffedAnimals.png'
    },
    {
        name: 'Study Group',
        pic: 'studyGroup.png'
    },
    {
        name: 'School Supplies',
        pic: 'schoolSuffiles.png'
    }
]

const Home = () => {
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
                tasks.map(task => <Task task={task}></Task>)
            }
        </div>
        </div>
    );
};

export default Home;