import React, {FC} from "react";
import {Button} from "react-native";
import styled from 'styled-components/native'


export const HomeScreen: FC = ({navigation}: any) => {
    return (
        <HomeScreenContainer>
            <ButtonsContainer>
                <Button
                    title="Friends"
                    onPress={() => navigation.navigate('Friends')}
                />
                <Button
                    title="Feed"
                    onPress={() => navigation.navigate('Feed')}
                />
            </ButtonsContainer>
        </HomeScreenContainer>
    );
};

const HomeScreenContainer = styled.SafeAreaView`
`;
const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

