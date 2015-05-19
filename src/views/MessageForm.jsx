import React from "react";

class MessageForm extends React.Component {

  constructor() {
    super();
    this.state = {text: ''};
  }

  handleChage(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      text: this.state.text
    };
    this.props.onSubmitMsg(message);
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleChage.bind(this)} value={this.state.text} />
        </form>
      </div>
    );
  }

}

export default MessageForm;
