/**
 * Created by etudiant on 22/10/2017.
 */
import React from 'react';
import {Row, Col} from 'antd';

export default class PCDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      accountItem: '',
    };
  };

  //这个方法会在组件加载完毕之后立即执行
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({accountItem: json});
      document.title = this.state.accountItem.title + " - React News | React 驱动的新闻平台";
    })
  };

  createMarkup() {
    return {__html: this.state.accountItem.pagecontent};
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div class="tabContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}