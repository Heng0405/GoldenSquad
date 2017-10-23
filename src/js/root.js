import React from 'react'
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCUserCenter from './components/usercenter';
import PCDetails from './components/pc_details';
import 'antd/dist/antd.css';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (
      //<div>
       // <PCIndex/>
      //</div>
      <HashRouter>
        <div>
        <Route path="/" component={PCIndex}></Route>
        <Route path="/details/:uniquekey" component={PCDetails}></Route>
        <Route path="/usercenter" component={PCUserCenter}></Route>
        </div>
      </HashRouter>

  );
  };
}
ReactDOM.render(
<Root/>, document.getElementById('mainContainer'));
