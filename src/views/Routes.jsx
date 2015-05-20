import React from "react";
import {Route, DefaultRoute} from "react-router";
import Main from "views/Main";

export default (
	<Route path="/">
		<DefaultRoute handler={Main} />
	</Route>
);
