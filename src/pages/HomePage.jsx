//import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

//import API from '../utils/API';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
 // const [users, setUsers] = useState([]);

  // const fetchData = async () => {
  //   const { data } = await API.getUsers();

  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <h1>HOME PAGE</h1>
 
    </div>
  );
}
