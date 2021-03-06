import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import cibo from "../../assets/cibo.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>DeliciousNess</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={cibo} alt="what deliscious good stuff" />
			</div>
		</Fragment>
	);
};

export default Header;
