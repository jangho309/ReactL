import {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  // const loadData = () => {
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c9dbb6308989482e9e088280a7aa30b0`)
  //       .then(response => console.log(response))
  //       .catch(e => console.log(e));
  // }

  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c9dbb6308989482e9e088280a7aa30b0`);
      setData(response.data.articles);
    } catch(e) {
      console.log(e);
    }
    
  }

  
  return (
    <>
      <div>
        <button type='button' onClick={loadData}>데이터 불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data)} readOnly={true} />}
    </>
  );
}

export default App;
