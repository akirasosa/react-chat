import { Store } from 'flummox';
import Immutable from 'immutable';

class MessageStore extends Store {

  constructor(flux) {
    super(flux);

    const messageActions = flux.getActions('messages');
    this.register(messageActions.addMessageFromRemote, this.addMessage);

    this.state = {
      messages: Immutable.List(["aaaa"]) //eslint-disable-line new-cap
    };
  }

  addMessage(message) {
    this.setState({
      messages: this.state.messages.push(message)
    });
  }

}

export default MessageStore;
