import React from "react";
import Message from "views/Message";

class MessageList extends React.Component {

  render () {
    const renderMessage = (message) => {
      return <Message msg={message} />;
    };

    return (
      <ul>
        { this.props.messages.map(renderMessage) }
      </ul>
    );
  }

}

export default MessageList;
