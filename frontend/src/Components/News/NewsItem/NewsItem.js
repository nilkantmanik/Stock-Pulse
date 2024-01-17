import React, { Component } from 'react'
import './NewsItem.css'

export default class NewsItem extends Component {
    // constructor(){
    //     super();
    // }
    render() {
        let {title, disc, imgUrl, url} = this.props;
        return (
            <div className="NewsItemContainer">
                <div style={{width: "18rem"}}>
                    <img src={imgUrl} alt="..."/>
                    <div>
                        <h5>{title}</h5> 
                        <p>{disc}</p>
                        <a href={url}>Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
