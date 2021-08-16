import styled from 'styled-components/native';
import {primaryRed} from "../../common/styles/colors";


export const MainContainer = styled.View`
  width: 100%;
  margin: 0 0 0 15px;
`;

export const UserName = styled.Text<{ color?: string }>`
  font-size: 20px;
  color: ${props => props.color || '#504f4f'};
  text-align: left;
  margin-bottom: 3px;
`;

export const UserNameContainer = styled.View`
  flex-direction: row;
`;
export const Mention = styled.Text`
  color: ${primaryRed}
`;
