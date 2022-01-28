import styled from "styled-components";
import { font } from "../../mainstyle/mixins";

export const Message = styled.p`
	${font({ fs: 20, fw: 500, lh: 20 })};
	max-width: 320px;
	color: ${(props) => props.theme.colors.primaryText};
`;
