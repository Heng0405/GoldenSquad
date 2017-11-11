/**
 * Created by etudiant on 11/11/2017.
 */

import React from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import {Card} from 'antd';

export default class PCNewsImage extends React.Component{
  constructor(){
    super();
    this.state = {
      news: ''
    };
  }
  componentWillMount()
  {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).
    then(response => response.json()).
    then(json => this.setState({news: json}));
  };


  render(){
    const {news}= this.state;
    //是让对象成为块级元素(比如a，span等)
    const styleImage = {
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    };
    const styeH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    const newsList=news.length
      ?
      news.map((newsItem,index)=>(
          <div key={index} class="imageblock">
            <Link to={`details/${newsItem.uniquekey}`} target="_blank" >
              <div class="custom-image">
                <img style={styleImage} src={newsItem.thumbnail_pic_s}/>
              </div>
              <div class="custom-card">
                <h3 style={styeH3}>{newsItem.title}</h3>
                <p>{newsItem.author_name}</p>
              </div>
            </Link>
          </div>
        )
      )
      :
      'No News';

    return(
      <div class="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{
          width: this.props.width
        }}>
          {newsList}
        </Card>

      </div>

    );
  };
};


