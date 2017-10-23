import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  notification,
  Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

import PCFooter from './pc_footer';
export default class PCUserCenter extends React.Component {
  render() {
    return (
      <div>

        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="My clients" key="1"></TabPane>
              <TabPane tab="My Information" key="2"></TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter/>
      </div>
    );
  };
}
