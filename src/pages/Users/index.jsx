import React from 'react'
import axios from 'axios';

const UsersPage = () => {


  const fetchProductsWithAxios = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data,"====>axios");
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  };
  
  fetchProductsWithAxios();


  return (
    <div>
      
    </div>
  )
}

export default UsersPage
