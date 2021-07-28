import React, { FC } from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'


export const UserMessagesScreen: FC = () => {
    return (
        <UserMessagesScreenContainer>
            <Text>UsersMessages Screen</Text>
        </UserMessagesScreenContainer>
    );
};

const UserMessagesScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
