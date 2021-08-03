import React, {FC} from "react";
import {Text} from "react-native";
import styled from 'styled-components/native'
import I18n from "react-native-i18n";
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setSenderNameAC} from "../bll/chatReducer";


export const Name: FC = () => {
    const [name, setName] = React.useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const onPressBtnJoin = () => {
        dispatch(setSenderNameAC(name))
        navigation.navigate(I18n.t('chatTab'))
    }

    return (
        <UserMessagesScreenContainer>
            <Title>{I18n.t('chatTitle')}</Title>
            <TextInput
                value={name}
                onChangeText={name => setName(name)}
                placeholder={I18n.t('chatInputTitle')}
            />
            <Button mode="outlined" onPress={onPressBtnJoin}>
                {I18n.t('chatButton')}
            </Button>
        </UserMessagesScreenContainer>
    );
};

const UserMessagesScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 15px;
`;
const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;

