import styled from 'styled-components';
import { centerBlock, font } from '../../mainstyle/mixins';

export const Container = styled.div`
  ${centerBlock};
  padding: 30px 0;
  width: 320px;
  align-items: center;
`;
export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 26, fw: 600, lh: 32 })};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.secondaryText};
`;
