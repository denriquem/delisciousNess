import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = (
		<ul className={classes["cart-items"]}>
			{[{ id: "m1", name: "Focacia Barese", amount: 2, price: 2 }].map(
				(item) => (
					<li>{item.name}</li>
				)
			)}
		</ul>
	);

	return (
		<div>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>4</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
