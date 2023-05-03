import { Routes, Route, Navigate } from "react-router-dom";
import {LoginPage} from "../pages/Login";
import { Home } from "../pages/Home";
import { TravelProvider } from "../providers/travelProvider";

const Router = () => {
  const token = localStorage.getItem('@TOKEN')
    return (
      <Routes>
        {
         token ? (
          <Route path='/' element={<Navigate to='/home' />} /> 
         ) : (
          <Route path='/' element={<Navigate to='/login' />} /> 
         )
        }
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={
          <TravelProvider>
            <Home />
          </TravelProvider>
        } />
      </Routes>
    );
  };
  
  export default Router;
  