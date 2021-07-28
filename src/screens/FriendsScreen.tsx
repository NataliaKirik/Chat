import React, {FC} from "react";
import {Button} from "react-native";
import styled from 'styled-components/native'


export const FriendScreen: FC = ({navigation}: any) => {
    return (
        <FriendScreenContainer>
            <Button
                title="Friend's Messages"
                onPress={() => navigation.navigate('Friends')}
            />
        </FriendScreenContainer>
    );
};

const FriendScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
