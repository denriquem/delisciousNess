import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const CartCtx = useContext(CartContext);

	const numberOfCartItems = CartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
