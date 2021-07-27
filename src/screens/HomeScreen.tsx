import React, { FC } from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'


export const HomeScreen: FC = () => {
  return (
    <HomeScreenContainer>
      <Text>Home Screen</Text>
    </HomeScreenContainer>
  );
};

const HomeScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
