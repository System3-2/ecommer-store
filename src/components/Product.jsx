import React, { useEffect,useState} from 'react'
import Loading from './Loading';

const Product = () => {
  const [ loading, setLoading ] = useState(true);
  const [product, setProduct ] = useState([]);
  const API_URL = 'https://api.escuelajs.co/api/v1/products'
  const fetchProduct = async() => {
    setLoading(true)
    try {
      const resp = await fetch(API_URL)
      const data = await resp.json();
      setLoading(false);
      setProduct(data);
    //  console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    setTimeout(() => {
    fetchProduct();
    },7000)
 },[])
 console.log(product);
  return (
    <div>
    { loading ? <Loading /> : <h1>Products</h1> }
    </div>
  )
}

export default Product
