import React from 'react';
import {Row, Col} from 'antd';
import { BrowserRouter as Router,Link } from 'react-router-dom';

import {Menu, Icon, Tabs, message, Form, Input, Checkbox, Button,Modal} from 'antd';
const SubMenu = Menu.SubMenu;

const FormItem = Form.Item;
const TabPane=Tabs.TabPane;


class PCHeader extends React.Component {
  constructor() {
    super();     //initialiser
    this.state = {
      current: 'Account',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    };
  };

  componentWillMount(){
    if (localStorage.userid!='') {
      this.setState({hasLogined:true});
      this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
    }
  };

  setModalVisible(value)
  {
    this.setState({modalVisible: value});
  };
  handleClick(e) {
    if (e.key == "register") {
      this.setState({current: 'register'});
      this.setModalVisible(true);
    } else {
      {
        this.setState({current: e.key});
      }
    }
  };
  handleSubmit(e)
  {
    //submit data to API
    e.preventDefault();
    var myFetchOptions = {
    method: 'GET'
  };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
      + "&username="+formData.userName+"&password="+formData.password
      +"&r_userName=" + formData.r_userName + "&r_password="
      + formData.r_password + "&r_confirmPassword="
      + formData.r_confirmPassword, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({userNickName: json.NickUserName, userid: json.UserId});
        localStorage.userid= json.UserId;
        localStorage.userNickName = json.NickUserName;
      });
    if (this.state.action=="login") {
      this.setState({hasLogined:true});
    }
    message.success("Request Success！");
    this.setModalVisible(false);
  };
  callback(key) {
    if (key == 1) {
      this.setState({action: 'login'});
    } else if (key == 2) {
      this.setState({action: 'register'});
    }
  };
  logout(){
    localStorage.userid= '';
    localStorage.userNickName = '';
    this.setState({hasLogined:false});
  };
  render() {
    let {getFieldProps} = this.props.form;
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
          <Router>
          <Link target="_blank" to={'/#/usercenter'}>
            <Button type="dashed" htmlType="button">User Center</Button>
          </Link>
          </Router>

        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>Log Out</Button>
      </Menu.Item>
      : <Menu.Item key="register" class="register">
        <Icon type="appstore"/>Sign Up/Sign In
      </Menu.Item>;
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" class="logo">
              <img src="./src/images/images.jpg" alt="logo"/>
              <p class="size">Golden Squad</p>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key="Account">
                <Icon type="bank"/>Account
              </Menu.Item>
              <Menu.Item key="Analyse">
                <Icon type="pie-chart"/>Analyse
              </Menu.Item>
              <Menu.Item key="Report">
                <Icon type="line-chart"/>Report
              </Menu.Item>
              <Menu.Item key="Bill">
                <Icon type="credit-card"/>Bill
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal title="Mon Compte" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} cancelText="Cancel" onOk={() => this.setModalVisible(false)} okText="OK">
              <Tabs type="card" onChange={this.callback.bind(this)}>
                <TabPane tab="Sign In" key="1">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="LogIn">
                      <Input placeholder="Please enter your login" {...getFieldProps('userName')}/>
                    </FormItem>
                    <FormItem label="PassWord">
                      <Input type="password" placeholder="lease enter your password" {...getFieldProps('password')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">Sign In</Button>
                  </Form>
                </TabPane>
                <TabPane tab="Sign Up" key="2">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="LogIn">
                      <Input placeholder="Please enter your login" {...getFieldProps('r_userName')}/>
                    </FormItem>
                    <FormItem label="PassWord">
                      <Input type="password" placeholder="Please enter your password" {...getFieldProps('r_password')}/>
                    </FormItem>
                    <FormItem label="Confirm PassWord">
                      <Input type="password" placeholder="Please enter your password agin" {...getFieldProps('r_confirmPassword')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  };
}
export default PCHeader = Form.create({})(PCHeader);