import { List, Item } from "./StatisticsStyle";
import { ReactComponent as Good } from "../../icons/good.svg";
import { ReactComponent as Neutral } from "../../icons/neutral.svg";
import { ReactComponent as Bad } from "../../icons/bad.svg";
import propTypes from "prop-types";

export const Statistics = ({
	good,
	bad,
	neutral,
	total,
	positivePercentage,
}) => {
	return (
		<List>
			<Item>
				<Good />- Good: {good}
			</Item>
			<Item>
				<Neutral />- Neutral: {neutral}
			</Item>
			<Item>
				<Bad />- Bad: {bad}
			</Item>
			<Item>Total: {total}</Item>
			<Item>Positive feedback: {positivePercentage}%</Item>
		</List>
	);
};

Statistics.propTypes = {
	good: propTypes.number.isRequired,
	neutral: propTypes.number.isRequired,
	bad: propTypes.number.isRequired,
	total: propTypes.number.isRequired,
	positivePercentage: propTypes.number.isRequired,
};
