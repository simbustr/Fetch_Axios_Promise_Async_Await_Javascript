import React, { useState } from "react";


const DashboardPage = () => {
  

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data,"====>fetch");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  fetchProducts();


  return (
    <div >
        Using Axios
    </div>
  );
};

export default DashboardPage;
