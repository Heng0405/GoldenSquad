import { Button, Icon } from 'antd';
import React from 'react';
import {Row, Col} from 'antd';
export default class ButtonDemo extends React.Component {

  demoTest(){

    fetch('https://api.github.com/repos/facebook/react').then(function(res){
      //si la requette success，on vas avoir un objet response.Return json.
      return res.json();
    }).then(function(data){
      console.log(data);
      console.log(data.id);
      console.log(data.name);
    });

  };
  render() {

    return (
      <div>
        <Row>
          <Col span={10}></Col>
          <Col span={7}>
            <Button type="primary" size="large"  onClick={this.demoTest}>Button Demo</Button>
          </Col>
          <Col span={9}></Col>
        </Row>
      </div>
    )
  }
}