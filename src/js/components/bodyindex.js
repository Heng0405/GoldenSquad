import React from 'react';
import BodyChild from './bodychild'

export default class BodyIndex extends React.Component {
  constructor(){
    super(); //调用基类的所有的初始化方法
    this.state =  {
      username : "Parry",
      age : 20
    }; //初始化赋值
  }
  changeUserInfos(age){
    this.setState({age:age})
  };
  handleChildValue(event){
    this.setState({
      age:event.target.value
    })
  };

  render() {
    /*setTimeout(()=>{
      //更改 state 的时候
      this.setState({username: "IMOOC",age : 30});
    },4000);*/

    return (
      <div>
        <h2>The content of this page!</h2>
        <p>{this.props.userid}</p>
        <p>{this.state.age}</p>
        <input type="button" value="submit" onClick={this.changeUserInfos.bind(this,99)} />
        <BodyChild handleChildValue={this.handleChildValue.bind(this)}/>
      </div>
    )
  }
}/**
 * Created by etudiant on 04/11/2017.
 */
