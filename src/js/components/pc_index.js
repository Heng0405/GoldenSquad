import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import ButtonDemo from './Demo'

export default class PCIndex extends React.Component {
  render() {
    return (
      <div>
      <PCHeader> </PCHeader>
      <ButtonDemo></ButtonDemo>
      <PCFooter> </PCFooter>

      </div>

    );
  };
}
