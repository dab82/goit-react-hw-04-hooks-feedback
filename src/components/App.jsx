import { GlobalStyle } from "../mainstyle/GlobalStyle";
import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = (event) => {
		const key = event.target.name;
		this.setState((prevState) => {
			return { [key]: (prevState[key] += 1) };
		});
	};

	countTotalFeedback = () => {
		const total = this.state;
		return total.good + total.neutral + total.bad;
		// Object.values(this.state).reduce((total, state) => total + state);
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
	};

	render() {
		const { good, bad, neutral } = this.state;
		const options = Object.keys(this.state);
		const totalStats = this.countTotalFeedback();
		const positiveStats = this.countPositiveFeedbackPercentage();
		return (
			<>
				<GlobalStyle />
				<Section title={"Please leave feedback"}>
					<FeedbackOptions
						options={options}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>
				<Section title={"Statistics"}>
					{totalStats > 0 ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={totalStats}
							positivePercentage={positiveStats}
						/>
					) : (
						<Notification message={"There is no feedback"} />
					)}
				</Section>
			</>
		);
	}
}
