import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

const Category = () => {
  const [ loading, setLoading ] = useState(true);
  const [ category,setCategory ] = useState([]);
  const API_URL = 'https://api.escuelajs.co/api/v1/categories';
 // fetch('https://api.escuelajs.co/api/v1/products').then(resp => resp.json()).then(data => console.log(data)).catch(err => console.log(err))

 const fetchCategory = async() => {
  setLoading(true);
  try {
    const resp = await fetch(API_URL)
    const data = await resp.json();
    setLoading(false);
    setCategory(data);
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
 }

 useEffect(() => {
  setTimeout(() => {
    fetchCategory();
  },7000)
 },[])

 console.log(category);
  return (
    <>
         <h1>Hello World!</h1>
          { loading ? <Loading /> :<h1>Category</h1> }
    </>
  )
}

export default Category
