import React, { PropTypes } from "react";

import styles from "../Header/Header.css";

export function Nav(props, context) {

	return (
		<div className={styles["topnav"]}>
			<ul>
				<li id={styles["yolo"]}>
					<a href="#">Home</a>
				</li>
				<li className={styles["topli"]}>
					<a href="#">Posts</a>
				</li>
				<li className={styles["topli"]}>
					<a href="#">About</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
