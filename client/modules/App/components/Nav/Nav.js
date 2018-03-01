import React, { PropTypes } from "react";

import styles from "../Header.Header.css";

export function Nav(props, context) {
	return (
		<div className="topnav">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Posts</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</div>
	);
}

export default Nav;
