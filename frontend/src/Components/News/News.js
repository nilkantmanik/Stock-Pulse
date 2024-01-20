import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem/NewsItem';
import './News.css';

const News = () => {
    const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=${1}`;
                const data = await fetch(url);
                const parsedData = await data.json();
                setArticles(parsedData.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };

        fetchData();
    }, []);

    return (
        <>
            <h3 className="heading">Top headlines</h3>
            <div className="newsContainer">
                {
                    articles.map((element) => (
                        <div key={element.url}>
                            <NewsItem
                                title={element.title ? element.title : ''}
                                disc={element.description ? element.description : ''}
                                imgUrl={element.urlToImage ? element.urlToImage : 'https://banner2.cleanpng.com/20180401/yfw/kisspng-zee-punjabi-television-channel-zee-entertainment-e-punjab-5ac0ad443c2319.6982965215225767082463.jpg'}
                                url={element.url}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default News;
