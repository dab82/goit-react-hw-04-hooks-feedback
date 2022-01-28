import { Button } from "./FeedbackOptionsStyle";
import propTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<Button
					type="button"
					onClick={onLeaveFeedback}
					name={option}
					key={option}
				>
					{option}
				</Button>
			))}
		</>
	);
};

FeedbackOptions.propTypes = {
	options: propTypes.arrayOf(propTypes.string).isRequired,
	onLeaveFeedback: propTypes.func.isRequired,
};
