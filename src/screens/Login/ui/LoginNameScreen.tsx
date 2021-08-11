import React, { FC } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { LoginScreenContainer, Title } from './LoginNameScreenStyle';
import { setLoginNameAC } from '../bll/loginNameReducer';
import I18n from '../../../i18n';


export const NameScreen: FC = () => {
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    const onPressBtnJoin = () => {
        dispatch(setLoginNameAC({ loginName: name }));
    };

    return (
        <LoginScreenContainer>
            <Title>{I18n.t('chatTitle')}</Title>
            <TextInput
                value={name}
                onChangeText={name => setName(name)}
                placeholder={I18n.t('chatInputTitle')}
            />
            <Button mode="outlined" onPress={onPressBtnJoin}>
                {I18n.t('chatButton')}
            </Button>
        </LoginScreenContainer>
    );
};



