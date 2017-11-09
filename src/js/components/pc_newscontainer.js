/**
 * Created by etudiant on 09/11/2017.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';

const TabPane=Tabs.TabPane;

export default class PCNewsContainer extends React.Component{

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">
                <Carousel autoplay {...settings}>
                  <div><img src="./src/images/b2.jpg" /></div>
                  <div><img src="./src/images/BI.jpg" /></div>
                  <div><img src="./src/images/BRAIN.jpg" /></div>
                  <div><img src="./src/images/téléchargement.jpg" /></div>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
    };


}
