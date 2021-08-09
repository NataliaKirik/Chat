import React, {FC, useEffect} from "react";
import {FlatList, KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
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
import {KeyboardAwareFlatList, KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useRef} from 'react';


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
        <KeyboardAwareScrollView style={styles.container} extraHeight={90}
                                 contentContainerStyle={styles.contentContainerStyle}>
            <View>
                <KeyboardAwareFlatList
                    data={data}
                    renderItem={({item}) => (
                        <ChatMessage {...item}/>
                    )}
                    keyExtractor={(_, index) => "List-" + index}
                />
            </View>
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
        </KeyboardAwareScrollView>

    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "space-between"
    },
    container: {
        backgroundColor: '#4c69a5',
        flex: 1
    },
    contentContainerStyle: {}
})


//     <KeyboardAwareScrollView style={styles.container} extraHeight={90} contentContainerStyle={styles.containerStyle}>
//     <View>
//     <KeyboardAwareFlatList
// data={data}
// renderItem={({item}) => (
//     <ChatMessage {...item}/>
// )}
// keyExtractor={(_, index) => "List-" + index}
// />
// </View>
// <InputAndButtonContainer>
//     <TextInputStyled
//         value={message}
//         onChangeText={message => setMessage(message)}
//         multiline={true}
//         placeholder={I18n.t('chatInputMessage')}
//     />
//     <ButtonStyled mode="contained" onPress={onPressBtnSend}>
//         <AntDesignStyled name={"caretright"}/>
//     </ButtonStyled>
// </InputAndButtonContainer>
// </KeyboardAwareScrollView>

