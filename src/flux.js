import { Flux } from 'flummox';
import MessageActions from 'actions/MessageActions';
import MessageStore from 'stores/MessageStore';
import { client } from 'sockets/MessageSocket';

class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('messages', MessageActions, client);
    this.createStore('messages', MessageStore, this);
  }
}

export default new AppFlux();
