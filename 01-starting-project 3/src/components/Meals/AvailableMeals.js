import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Focaccia Barese",
		description: "Straight from Bari Vecchia",
		price: 4,
	},
	{
		id: "m2",
		name: "Panzerotto di Ricotta Forte",
		description: "Deep fried mini pizza filled with Ricotta Forte",
		price: 2,
	},
	{
		id: "m3",
		name: "Crudo",
		description: "A big platter of raw fish and sea food",
		price: 20,
	},
	{
		id: "m4",
		name: "Pizza Crudaiola",
		description: "Pizza with rocket, tomotoes and ricotta marzotica",
		price: 7,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
