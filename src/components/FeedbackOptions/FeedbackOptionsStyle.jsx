import styled from "styled-components";
import { font } from "../../mainstyle/mixins";

export const Button = styled.button`
	padding: 15px;
	min-width: 80px;
	border-radius: 10px;
	${font({ fs: 20, fw: 600, lh: 20 })};
	background-color: ${(props) => props.theme.colors.buttonBg};
	text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.primaryText};
	box-shadow: ${(props) => props.theme.colors.boxShadow};
	transition: all 250ms ease-in-out;
	::first-letter {
		text-transform: uppercase;
	}
	&:not(:last-child) {
		margin-right: 12px;
	}
	&:hover {
		transform: scale(1.2);
		box-shadow: -2px -2px 5px ${(props) => props.theme.colors.white},
			2px 5px 5px ${(props) => props.theme.colors.grey};
	}
	&:active {
		box-shadow: inset 1px 1px 2px ${(props) => props.theme.colors.white},
			inset -1px -1px 2px ${(props) => props.theme.colors.grey};
	}
`;
