import React from 'react';
import {Routes, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Join from './pages/Join';
import { Provider } from 'react-redux';
import store from './store/store';

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Routes>
          <Route index element={<App/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/join" element={<Join/>}/>
      </Routes>
    </Provider>
  );
};

export default AppRouter;