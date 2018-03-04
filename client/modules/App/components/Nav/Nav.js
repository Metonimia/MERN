import React, { PropTypes } from "react";
import { Link } from "react-router";
import { injectIntl, FormattedMessage } from 'react-intl';

import styles from "../Header/Header.css";

export function Nav(props, context) {
	return (
		<div className={styles["topnav"]}>
			<ul>
				<li id={styles["yolo"]}>
					<Link to="/home">
						<FormattedMessage id="navHome" />
					</Link>
				</li>
				<li className={styles["topli"]}>
					<Link to="/posts">
						<FormattedMessage id="navPost" />
					</Link>
				</li>
				<li className={styles["topli"]}>
					<Link to="/about">
						<FormattedMessage id="navAbout" />
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
