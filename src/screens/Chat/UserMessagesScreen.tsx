import React, {FC} from "react";
import {Text} from "react-native";
import styled from 'styled-components/native'
import I18n from "react-native-i18n";
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";


export const UserMessagesScreen: FC = () => {
    const [text, setText] = React.useState('');
    const navigation = useNavigation();

    return (
        <UserMessagesScreenContainer>
            <Title>{I18n.t('chatTitle')}</Title>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
                placeholder={I18n.t('chatInputTitle')}
            />
            <Button mode="outlined" onPress={() => navigation.navigate(I18n.t('chatTab'))}>
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

