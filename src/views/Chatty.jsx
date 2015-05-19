import React from "react";
import MessageList from "views/MessageList";
import MessageForm from "views/MessageForm";

class Chatty extends React.Component {

  constructor(props) {
    super(props);
  }

  handleMessageSubmit(message) {
    this.props.flux.getActions('messages').addMessage(message);
  }

  render() {
    return (
      <div>
        <p><a href="/" target="_blank">Open another window to enjoy chatting.</a></p>
        <MessageList messages={this.props.messages} />
        <MessageForm onSubmitMsg={this.handleMessageSubmit.bind(this)} />
      </div>
    );
  }

}

export default Chatty;
