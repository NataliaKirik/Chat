import React, {FC} from "react";
import {Button} from "react-native";
import styled from 'styled-components/native'
import {useNavigation} from "@react-navigation/native";


export const FriendScreen: FC = () => {
    const navigation = useNavigation();

    return (
        <FriendScreenContainer>
            <Button
                title="Friend's Messages"
                onPress={() => navigation.navigate('Messages', {screen: 'User\'s message'})}
            />
        </FriendScreenContainer>
    );
};

const FriendScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
