/**
 * Created by etudiant on 04/11/2017.
 */

import React from 'react';

export default class BodyChild extends React.Component {

  render(){
    return (
      <div>
        <p>Input of the child page for the age :
          <input type="text" onChange={this.props.handleChildValue} />
        </p>
        <p>{this.props.userid} {this.props.userName} {this.props.sex}</p>

      </div>
    )
  }



}
