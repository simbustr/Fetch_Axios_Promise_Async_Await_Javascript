import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/Users";
import Servicespage from './pages/Services'
import AboutPage from './pages/About'


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Layout />
        <Routes>
         
          <Route path="/dasboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/about" element={<AboutPage />} />
          
          
       
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
