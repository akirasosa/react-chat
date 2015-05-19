import { Actions } from 'flummox';

class MessageActions extends Actions {

  constructor(socketClient) {
    super();
    this.socketClient = socketClient;
  }

  addMessage(message) {
    this.socketClient.send('/topic/messages', {}, JSON.stringify(message));
    return message;
  }

  addMessageFromRemote(message) {
    return message;
  }

}

export default MessageActions;
