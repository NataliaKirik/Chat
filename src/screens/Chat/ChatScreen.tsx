import React, {FC} from "react";
import {Text} from "react-native";
import styled from 'styled-components/native'
import {Button, TextInput} from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import EntypoIcons from "react-native-vector-icons/Entypo";
import I18n from "react-native-i18n";

export const ChatScreen: FC = () => {
    const [text, setText] = React.useState('');

    return (
        <ChatScreenContainer>
            <Text>Message</Text>
            <Text>Message 1</Text>
            <Text>Message 2</Text>
            <InputAndButtonContainer>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                    multiline={true}
                    placeholder={I18n.t('chatInputMessage')}
                    style={{width: '85%'}}
                />
                <Button mode="contained" onPress={() => console.log('Pressed')}
                        style={{justifyContent: 'center', width: '15%'}}>
                    <AntDesign name={"caretright"} style={{fontSize: 20}}/>
                </Button>
            </InputAndButtonContainer>
        </ChatScreenContainer>

    );
};

const ChatScreenContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;
const InputAndButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border: black 1px solid;
`;
const ButtonSend = styled.Button`
`;
