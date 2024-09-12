import React from 'react';
import {Routes, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Join from './pages/Join';

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
    </Routes>
  );
};

export default AppRouter;