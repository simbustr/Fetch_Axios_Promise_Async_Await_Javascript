import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='nav-bar'>
         <Link to="/dasboard">FetchData</Link>
         <Link to="/users">AxiosData</Link>
         <Link to="/services">PromiseFetch</Link>
         <Link to="/about">PromiseAxios</Link>
    </div>
  )
}

export default Layout
