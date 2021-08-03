import React, {FC} from "react";
import {Text} from "react-native";
import styled from 'styled-components/native'
import {Button, TextInput} from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import I18n from "react-native-i18n";
import {useDispatch, useSelector} from "react-redux";
import {addChatUserDataTC} from "../bll/chatReducer";
import {AppRootStateType} from "../../../app/store";

export const ChatMessagesScreen: FC = () => {
    const [message, setMessage] = React.useState('');
    const dispatch = useDispatch()
    const senderName = useSelector<AppRootStateType, string>(state => state.chat.senderName)
    const chatMessage = useSelector<AppRootStateType, string>(state => state.chat.message)

    const onPressBtnSend = () => {
        dispatch(addChatUserDataTC(senderName, message))
        setMessage('')
    }

    return (
        <ChatScreenContainer>
            <Text>Message</Text>
            <Text>Message 1</Text>
            <Text>{`name: ${senderName} message:${chatMessage}`}</Text>
            <InputAndButtonContainer>
                <TextInput
                    value={message}
                    onChangeText={message => setMessage(message)}
                    multiline={true}
                    placeholder={I18n.t('chatInputMessage')}
                    style={{width: '85%'}}
                />
                <Button mode="contained" onPress={onPressBtnSend}
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
