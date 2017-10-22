/**
 * Created by etudiant on 12/10/2017.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs} from 'antd';
import { Carousel } from 'antd';

const TabPane=Tabs.TabPane;

export  default  class PCNewsContainer extends React.Component{
  render(){
    return
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div class="carousel">


              </div>


            </div>



          </Col>


          <Col span={2}></Col>

        </Row>
      </div>





    );





};


}
