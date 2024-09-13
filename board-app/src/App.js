import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store/store';

function App() {
	const persiststore = persistStore(store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persiststore}>
				<Routes>
					<Route element={<Layout/>}>
						<Route index element={<Home />}/>
						<Route path='/join' element={<Join/>}/>
						<Route path='/login' element={<Login/>}/>
					</Route>
				</Routes>
			</PersistGate>
		</Provider>
	);
}

export default App;
