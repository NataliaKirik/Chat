import styled from 'styled-components/native';
import {Button} from "react-native-paper";
import {GoogleSigninButton} from "@react-native-google-signin/google-signin";

export const LoginScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 15px;
`;
export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;
export const ButtonPressStyled = styled(Button)`
  height: 45px;
  margin: 3px;
`;
export const GoogleSigninBtn = styled(GoogleSigninButton)`
  width: 200px;
  height: 50px;
`;

