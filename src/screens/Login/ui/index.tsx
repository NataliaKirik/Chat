import React, { FC } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { LoginScreenContainer, Title } from './style';
import I18n from '../../../i18n';
import { storeUsername } from '../../../app/asyncStore';
import { setLocationAC } from '../../../app/bll/contentReducer';
import { useDispatch } from 'react-redux';


export const LoginScreen: FC = () => {
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    const onPressBtnJoin = async () => {
        await storeUsername(name);
        dispatch(setLocationAC({ location: 'app' }));
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



