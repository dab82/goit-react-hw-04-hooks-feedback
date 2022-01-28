import { Message } from "./NotificationStyle";
import propTypes from "prop-types";

export const Notification = ({ message }) => {
	return <Message>{message}</Message>;
};

Notification.propTypes = {
	message: propTypes.string,
};
