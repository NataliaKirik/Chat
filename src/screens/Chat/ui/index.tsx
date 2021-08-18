import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import I18n from 'react-native-i18n';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../app/store';
import {ChatMessage} from '../../../components/ChatMessage';
import {
    AntDesignStyled,
    ButtonStyled,
    InputAndButtonContainer,
    KeyboardAwareSVStyled,
    TextInputStyled
} from './style';
import {ChatDataType} from '../../../api/api';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {addChatData, getChatDataTC} from '../bll/chatReducer';

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
    const data = useSelector<AppRootStateType, Array<ChatDataType>>(state => state.chatMessages.data);
    const {id} = route.params;
    const receiverName = route.params.owner;

    useEffect(() => {
        dispatch(getChatDataTC(id));
    }, [data]);

    const onPressBtnSend = () => {
        addChatData(id, receiverName, message);
        setMessage('');
    };

    return (
        <KeyboardAwareSVStyled extraHeight={90}
                               enableOnAndroid={true}>
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
        </KeyboardAwareSVStyled>
    );
};



