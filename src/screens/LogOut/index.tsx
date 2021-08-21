import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { ImageStyled, ScreenWrapper, TextStyled } from './style';
import { deleteUsername, getUsername } from '../../app/asyncStore';
import { useDispatch } from 'react-redux';
import { setLocationAC } from '../../app/bll/contentReducer';


export const Logout = () => {
    const dispatch = useDispatch();
    const onPressLogout = async () => {
        await deleteUsername();
        dispatch(setLocationAC({ location: '' }));
    };
    const [user, setUser] = useState<string | null | void>('');
    const getUser = async () => {
        const result = await getUsername();
        setUser(result);
    };
    getUser();

    return (
        <ScreenWrapper>
            <View style={{ flexDirection: 'row' }}>
                <ImageStyled source={require('../../assets/images/byeCat.png')} />
                <TextStyled>Bye,{user} dkjnvdkjnvkdfkvndkfn</TextStyled>
            </View>
            <Button title={'Logout'}
                    onPress={onPressLogout} />
        </ScreenWrapper>
    );
};

