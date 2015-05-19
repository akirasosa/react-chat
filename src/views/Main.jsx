import React from "react";
import Chatty from "views/Chatty";
import FluxComponent from 'flummox/component';
import flux from 'flux';

class Main extends React.Component {

  render() {
    return (
      <FluxComponent flux={flux} connectToStores={{
        messages: store => ({
          messages: store.state.messages
        })
      }}>
        <Chatty />
      </FluxComponent>
    );
  }

}

export default Main;
