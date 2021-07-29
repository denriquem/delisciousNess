import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
	const CartCtx = useContext(CartContext);

	const numberOfCartItems = CartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${
		buttonIsHighlighted ? classes.bump : ""
	}`;

	const { items } = CartCtx;
	useEffect(() => {
		if (CartCtx.items.length === 0) {
			return;
		}
		setButtonIsHighlighted(true);

		const timer = setTimeout(() => {
			setButtonIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
