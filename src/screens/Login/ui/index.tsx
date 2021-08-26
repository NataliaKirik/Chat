import React, {FC, useEffect} from 'react';
import {ButtonPressStyled, ButtonsContainer, GoogleSigninBtn, LoginScreenContainer, Title} from './style';
import I18n from '../../../i18n';
import {storeUsername} from '../../../app/asyncStore';
import {setLocationAC} from '../../../app/bll/contentReducer';
import {useDispatch} from 'react-redux';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';


export const LoginScreen: FC = () => {
    const dispatch = useDispatch();
    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
            name: '',
        },
        mode: 'onChange',
    });

    // useEffect(() => {
    //     for(let qq = 0; qq < 100; ++qq) {
    //         setTest(test + 1);
    //         console.log('ue, test=', test);
    //     }
    // }, []);
    // console.log('render, test=', test);

    GoogleSignin.configure({
        webClientId: '773868382019-87h2nk10fo8106if8q3evdic2dcau4jt.apps.googleusercontent.com',
    });

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await storeUsername(userInfo.user.givenName!);
            dispatch(setLocationAC({screen: 'app'}));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <LoginScreenContainer>
            <Title>{I18n.t('chatTitle')}</Title>

            <FormBuilder
                control={control}
                setFocus={setFocus}
                formConfigArray={[
                    {
                        name: 'name',
                        type: 'text',
                        rules: {
                            required: {
                                value: true,
                                message: 'Name is required',
                            },
                        },
                        textInputProps: {
                            label: I18n.t('chatInputTitle'),
                        },
                    },
                ]}
            />

            <ButtonsContainer>
                <ButtonPressStyled mode="outlined" onPress={
                    handleSubmit(async (data) => {
                        await storeUsername(data.name)
                        dispatch(setLocationAC({screen: 'app'}));
                    })
                }>
                    {I18n.t('chatButton')}
                </ButtonPressStyled>


                <GoogleSigninBtn onPress={signIn} size={GoogleSigninButton.Size.Wide}
                                 color={GoogleSigninButton.Color.Light}/>
            </ButtonsContainer>
        </LoginScreenContainer>
    );
};



