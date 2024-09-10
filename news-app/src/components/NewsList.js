import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px){
		width: 100%;
		padding-left: 1rem;
		padding-rigt: 1rem;
	}
`

const NewsList = ({category}) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	const getArticles = useCallback(async () => {
		// axios가 돌아가기 전이므로 loading을 true로 변경
		setLoading(true);

		try {
			const cate = category === 'all' ? '' : `&category=${category}`;
			const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us${cate}&apiKey=c9dbb6308989482e9e088280a7aa30b0`)
			console.log(response);
			setArticles(() => response.data.articles);
		} catch(e){
			alert('에러가 발생했습니다.');
		} finally {
			setLoading(false);
		}
	}, [category]);

	useEffect(() => {getArticles();}, [category]);

	if(loading)
		return <NewsListBlock>로딩 중...</NewsListBlock>;

	return (
		<NewsListBlock>
			{articles && articles.map(
				article => <NewsItem key={article.url} article={article}/>
			)}
		</NewsListBlock>
	);
};

export default NewsList;