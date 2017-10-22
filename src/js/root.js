import React from 'react'
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCDetails from './components/pc_details';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class Root extends React.Component {
  render() {
    return (
      //<div>
       // <PCIndex/>
      //</div>
      <Router>
        <div>
        <Route exact path="/" component={PCIndex}></Route>
        <Route path="/details/:uniquekey" component={PCDetails}></Route>
        </div>
      </Router>

  );
  };
}
ReactDOM.render(
<Root/>, document.getElementById('mainContainer'));
