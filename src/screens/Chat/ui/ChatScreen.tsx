import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import I18n from 'react-native-i18n';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../app/store';
import {ChatMessage} from '../../../components/ChatMessage/ChatMessage';
import {AntDesignStyled, ButtonStyled, InputAndButtonContainer, TextInputStyled} from './ChatMessagesScreenStyle';
import {ChatDataType} from '../../../api/api';
import {KeyboardAwareFlatList, KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {addChatData, getChatDataTC} from '../bll/chatMessagesReducer';

type PropsType = {
    navigation: {}
    route: {
        key: string
        name: string
        params: {
            id: number
            owner: string
        }
    }
};  //?


export const ChatScreen: FC<PropsType> = ({route}) => {
    const [message, setMessage] = React.useState('');
    const dispatch = useDispatch();
    const senderName = useSelector<AppRootStateType, string>(state => state.loginName.loginName);
    const data = useSelector<AppRootStateType, Array<ChatDataType>>(state => state.chatMessages.data);
    const {id} = route.params;
    const receiverName = route.params.owner;

    useEffect(() => {
        dispatch(getChatDataTC(senderName, id));
    }, [data]);

    const onPressBtnSend = () => {
        addChatData(id, receiverName, message, senderName);
        setMessage('');
    };

    return (
        <KeyboardAwareScrollView style={styles.container} extraHeight={90}
                                 contentContainerStyle={styles.contentContainerStyle} enableOnAndroid={true}>
            <View>
                <KeyboardAwareFlatList
                    data={data}
                    renderItem={({item}) => (
                        <ChatMessage {...item}/>
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
                    <AntDesignStyled name={'caretright'}/>
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



