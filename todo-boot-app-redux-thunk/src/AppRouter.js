import React from 'react';
import {Routes, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Join from './pages/Join';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const AppRouter = () => {
	const persiststore = persistStore(store);

  	return (
    	<Provider store={store}>
      		<PersistGate loading={null} persistor={persiststore}>
        		<Routes>
	        	    <Route index element={<App/>}/>
	            	<Route path="/login" element={<Login/>}/>
            		<Route path="/join" element={<Join/>}/>
        		</Routes>
      		</PersistGate>
    	</Provider>
  	);
};

export default AppRouter;