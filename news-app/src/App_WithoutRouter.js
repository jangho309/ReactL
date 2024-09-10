import {useState, useCallback} from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
	// const [data, setData] = useState(null);

	// const loadData = () => {
	//   axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c9dbb6308989482e9e088280a7aa30b0`)
	//       .then(response => console.log(response))
	//       .catch(e => console.log(e));
	// }

	// const loadData = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			`https://newsapi.org/v2/top-headlines?country=us&apiKey=c9dbb6308989482e9e088280a7aa30b0`);
	// 		setData(response.data.articles);
	// 	} catch(e) {
	// 		console.log(e);
	// 	}
		
	// }
    const [category, setCategory] = useState('all');
	
    const changeCategory = useCallback((cate) => {
        setCategory(() => cate);
    }, []);

	return (
		<>
			<Categories category={category} changeCategory={changeCategory}/>
			<NewsList category={category}/>
		</>
	);
}

export default App;
