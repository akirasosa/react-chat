import SockJS from 'sockjs-client';
import Stomp from 'stompjs/lib/stomp';

const socket = new SockJS(`//${location.host}/chat`);
const stompClient = window.Stomp.over(socket);
export { stompClient as client };

class MessageSocket {

  static init(flux) {
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (message) => {
        flux.getActions('messages').
          addMessageFromRemote(JSON.parse(message.body).text);
      });
    });
  }

}

export default MessageSocket;
