import styled from "styled-components/native";
import {Button, TextInput} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export const ChatScreenContainer = styled.View`
  flex: 1;
`;
export const InputAndButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: black 1px solid;
`;
export const TextInputStyled = styled(TextInput)`
  width: 85%;
`;
export const AntDesignStyled = styled(AntDesign)`
  font-size: 20px;
`;
export const ButtonStyled = styled(Button)`
  justify-content: center;
  width: 15%;
`;
export const KeyboardAwareSVStyled = styled(KeyboardAwareScrollView)`
  flex: 1;
`;
