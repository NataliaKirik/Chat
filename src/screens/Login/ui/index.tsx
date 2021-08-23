import React, { FC } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { ButtonsContainer, LoginScreenContainer, Title } from './style';
import I18n from '../../../i18n';
import { storeUsername } from '../../../app/asyncStore';
import { setLocationAC } from '../../../app/bll/contentReducer';
import { useDispatch } from 'react-redux';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


export const LoginScreen: FC = () => {
    const [name, setName] = React.useState('');
    const [userGoogleInfo, setUserGoogleInfo] = React.useState<any>({});

    const dispatch = useDispatch();
    GoogleSignin.configure({
        webClientId: '773868382019-87h2nk10fo8106if8q3evdic2dcau4jt.apps.googleusercontent.com',
        offlineAccess: false

    });

    const onPressBtnJoin = async () => {
        await storeUsername(name);
        dispatch(setLocationAC({ location: 'app' }));
    };
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserGoogleInfo(userInfo);
            await storeUsername(userGoogleInfo.user.name);
            dispatch(setLocationAC({ location: 'app' }));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <LoginScreenContainer>
            <Title>{I18n.t('chatTitle')}</Title>
            <TextInput
                value={name}
                onChangeText={name => setName(name)}
                placeholder={I18n.t('chatInputTitle')}
            />
            <ButtonsContainer>
                <Button mode="outlined" onPress={onPressBtnJoin} style={{ height: 45 }}>
                    {I18n.t('chatButton')}
                </Button>
                <GoogleSigninButton onPress={signIn} size={GoogleSigninButton.Size.Wide}
                                    color={GoogleSigninButton.Color.Light}
                                    style={{ width: 200, height: 50 }} />
            </ButtonsContainer>
        </LoginScreenContainer>
    );
};



