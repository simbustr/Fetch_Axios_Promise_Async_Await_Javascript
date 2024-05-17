import React from "react";

const Servicespage = () => {


  const fetchProducts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject('There was a problem with the fetch operation: ' + error);
      }
    });
  };

  fetchProducts()
  .then(data => {
    console.log(data,"===>Promise Fetch");
  })
  .catch(error => {
    console.error(error);
  });


  return <div>

  </div>;
};

export default Servicespage;
