import React from "react";
import Router from "react-router";
import routes from "views/Routes";
import flux from 'flux';
import MessageSocket from 'sockets/MessageSocket';

Router.run(routes, (Handler) => {
	React.render(<Handler />, document.getElementById("app-container"));
});

MessageSocket.init(flux);
