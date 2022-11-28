import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './Loading';

const Users = () => {
  const [ loading, setLoading ] = useState(true);
  const [ users, setusers ] = useState([]);
  const API_URL = 'https://api.escuelajs.co/api/v1/users';
  const fetchUsers = async() => {
    setLoading(true);
    try {
      const resp = await fetch(API_URL)
      const data = await resp.json();
      setLoading(false);
      //console.log(data);
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    },7000)
  },[])
  console.log(users);
  return (
    <div>
    { loading ? <Loading /> :<h1>Users</h1> }
    </div>
  )
}

export default Users
