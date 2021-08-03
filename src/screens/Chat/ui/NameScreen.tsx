import React, {FC} from "react";
import I18n from "react-native-i18n";
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setSenderNameAC} from "../bll/chatUserNameReducer";
import {Title, UserMessagesScreenContainer} from "./NameScreenStyle"


export const NameScreen: FC = () => {
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



