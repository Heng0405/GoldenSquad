/**
 * Created by etudiant on 09/11/2017.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_newsblock'
import PCNewsImage from './pc_newsimage'
const TabPane=Tabs.TabPane;

export default class PCNewsContainer extends React.Component{

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
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
              <Row>
                <Col span={1}></Col>
                <Col span={11}>
                 <PCNewsImage count={3} type="guonei" width="400px" cartTitle="Entertainment Circles " imageWidth="112px"/>
                </Col>
                <Col span={11}>
                  <PCNewsImage count={3} type="yule" width="400px" cartTitle="Entertainment Circles " imageWidth="112px"/>
                </Col>

                <Col span={1}></Col>
              </Row>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="Top News" key="1">
                <PCNewsBlock count={12} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="International News" key="2">
                <PCNewsBlock count={12} type="guoji" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImage count={1} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
    };


}
