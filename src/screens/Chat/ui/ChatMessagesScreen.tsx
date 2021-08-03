import React, {FC, useEffect} from "react";
import {FlatList} from "react-native";
import I18n from "react-native-i18n";
import {useDispatch, useSelector} from "react-redux";
import {addChatUserDataTC} from "../bll/chatUserNameReducer";
import {AppRootStateType} from "../../../app/store";
import {ChatMessage} from "../../../components/ChatMessage/ChatMessage";
import {getChatMessageDataTC} from "../bll/chatMessagesReducer";
import {
    ChatScreenContainer,
    InputAndButtonContainer,
    TextInputStyled,
    ButtonStyled,
    AntDesignStyled
} from "./ChatMessagesScreenStyle"
import {ChatUserDataType} from "../../../api/api";

export const ChatMessagesScreen: FC = () => {
    const [message, setMessage] = React.useState('');
    const dispatch = useDispatch()
    const senderName = useSelector<AppRootStateType, string>(state => state.chatUserName.senderName)
    const data = useSelector<AppRootStateType, Array<ChatUserDataType>>(state => state.chatMessages.data)

    useEffect(() => {
        dispatch(getChatMessageDataTC())
    }, [data, dispatch])

    const onPressBtnSend = () => {
        dispatch(addChatUserDataTC(senderName, message))
        setMessage('')
    }

    return (
        <ChatScreenContainer>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <ChatMessage {...item}/>
                )}
                keyExtractor={(_, index) => "List-" + index}
            />
            <InputAndButtonContainer>
                <TextInputStyled
                    value={message}
                    onChangeText={message => setMessage(message)}
                    multiline={true}
                    placeholder={I18n.t('chatInputMessage')}
                />
                <ButtonStyled mode="contained" onPress={onPressBtnSend}>
                    <AntDesignStyled name={"caretright"}/>
                </ButtonStyled>
            </InputAndButtonContainer>
        </ChatScreenContainer>
    );
};

