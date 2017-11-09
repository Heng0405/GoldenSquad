import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import ButtonDemo from './Demo';
import BodyIndex from './BodyIndex';
import PCNewsContainer from './pc_newscontainer';


export default class PCIndex extends React.Component {

  render(){

    return (
      <div>
      <PCHeader> </PCHeader>
      <ButtonDemo></ButtonDemo>
      <BodyIndex userid={123} ></BodyIndex>
      <PCNewsContainer></PCNewsContainer>

      <PCFooter> </PCFooter>
      </div>

    );
  };
}
