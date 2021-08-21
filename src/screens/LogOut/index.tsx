import React from 'react';
import {Button, Text} from "react-native";
import {ScreenWrapper} from "./style";
import {deleteUsername} from "../../app/asyncStore";


export const Logout = () => {
    return (
        <ScreenWrapper>
            <Text>Bye</Text>
            <Button title={'Logout'}
                    onPress={() => {
                        deleteUsername()
                        // redraw app
                        // dispatch(setLocation('login'));
                    }}/>
        </ScreenWrapper>
    )
};

