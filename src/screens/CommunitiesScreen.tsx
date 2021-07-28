import React, { FC } from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'


export const CommunitiesScreen: FC = () => {
    return (
        <CommunitiesScreenContainer>
            <Text>Communities Screen</Text>
        </CommunitiesScreenContainer>
    );
};

const CommunitiesScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
