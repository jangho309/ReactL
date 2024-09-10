import {Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
	return (
		<Routes>
			<Route index element={<NewsPage/>}/>
			<Route path='/:category' element={<NewsPage/>}/>
		</Routes>
	);
}

export default App;
