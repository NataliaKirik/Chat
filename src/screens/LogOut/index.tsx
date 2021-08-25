import React, {useState} from 'react';
import {ButtonsWrap, ImageAndTextWrap, ImageStyled, ScreenWrapper, Text, TextStyled} from './style';
import {deleteUsername, getUsername} from '../../app/asyncStore';
import {useDispatch} from 'react-redux';
import {setLocationAC} from '../../app/bll/contentReducer';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


export const Logout = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const onPressLogout = async () => {
        await deleteUsername();
        dispatch(setLocationAC({screen: 'login'}));
    };
    const [user, setUser] = useState<string | null | void>('');
    const getUser = async () => {
        const result = await getUsername();
        setUser(result);
    };
    getUser();

    return (
        <ScreenWrapper>
            <ImageAndTextWrap>
                <ImageStyled source={require('../../assets/images/byeCat.png')}/>
                <TextStyled>
                    <Text>Bye,{'\n'}{user}</Text>
                </TextStyled>
            </ImageAndTextWrap>
            <ButtonsWrap>
                <Button color={'dimgrey'} mode="contained" onPress={onPressLogout}>
                    Logout
                </Button>
                <Button color={'dimgrey'} mode="contained" onPress={() => navigation.navigate('FeedBack Form')}>
                    Send feedback
                </Button>
            </ButtonsWrap>
        </ScreenWrapper>
    );
};

