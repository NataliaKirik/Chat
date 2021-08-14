import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import I18n from 'react-native-i18n';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../app/store';
import { ChatMessage } from '../../../components/ChatMessage/ChatMessage';
import { AntDesignStyled, ButtonStyled, InputAndButtonContainer, TextInputStyled } from './ChatMessagesScreenStyle';
import { ChatDataType } from '../../../api/api';
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { addChatData } from '../bll/chatMessagesReducer';


export const ChatMessagesScreen: FC = () => {
    const [message, setMessage] = React.useState('');
    const senderName = useSelector<AppRootStateType, string>(state => state.loginName.loginName);
    const data = useSelector<AppRootStateType, Array<ChatDataType>>(state => state.chatMessages.data);

    const onPressBtnSend = () => {
        addChatData(1, 'Zephor', message, senderName);
        setMessage('');
    };

    return (
        <KeyboardAwareScrollView style={styles.container} extraHeight={90}
                                 contentContainerStyle={styles.contentContainerStyle} enableOnAndroid={true}>
            <View>
                <KeyboardAwareFlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ChatMessage {...item} />
                    )}
                    keyExtractor={(_, index) => 'List-' + index}
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
                    <AntDesignStyled name={'caretright'} />
                </ButtonStyled>
            </InputAndButtonContainer>
        </KeyboardAwareScrollView>

    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        flex: 1
    },
    contentContainerStyle: {}
});


