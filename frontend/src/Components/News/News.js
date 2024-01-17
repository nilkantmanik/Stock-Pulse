import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'
import './News.css'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles
        })
        console.log(this.state.articles);
    }

    render() {
        return (
            <>
            <h3 className="heading">Top headlines</h3>
            <div className="newsContainer">
                <div>
                {
                    this.state.articles.map((element) => {
                        console.log("hello");
                        return (<div key={element.url}>
                                <NewsItem title={element.title?element.title:""} disc={element.description?element.description:""} imgUrl={element.urlToImage?element.urlToImage:"https://banner2.cleanpng.com/20180401/yfw/kisspng-zee-punjabi-television-channel-zee-entertainment-e-punjab-5ac0ad443c2319.6982965215225767082463.jpg"} url={element.url}/>
                                </div>)
                    }
                    )
                } 
                </div>

            </div>
        </>
        )
    }
}
