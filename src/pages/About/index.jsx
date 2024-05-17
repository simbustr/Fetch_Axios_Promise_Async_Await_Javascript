import React from 'react'
import axios from 'axios';

const AboutPage = () => {


    const fetchProductsWithAxios = () => {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await axios.get('https://fakestoreapi.com/products');
            resolve(response.data);
          } catch (error) {
            reject('There was a problem with the axios operation: ' + error);
          }
        });
      };


      fetchProductsWithAxios()
  .then(data => {
    console.log(data,"====>promise Axios");
  })
  .catch(error => {
    console.error(error);
  });


  return (
    <div>
      
    </div>
  )
}

export default AboutPage
