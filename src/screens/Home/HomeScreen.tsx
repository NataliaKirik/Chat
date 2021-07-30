import React, {FC} from "react";
import {Button, Text} from "react-native";
import styled from 'styled-components/native'
import {useNavigation} from "@react-navigation/native";
import I18n from '../../i18n';


export const HomeScreen: FC = () => {
    const navigation = useNavigation();

    return (
        <HomeScreenContainer>
            <ButtonsContainer>
                <Button
                    title={I18n.t('homeButtonFriends')}
                    onPress={() => navigation.navigate('Friends')}
                />
                <Button
                    title={I18n.t('homeButtonFeedBack')}
                    onPress={() => navigation.navigate('FeedBack Form')}
                />
            </ButtonsContainer>
            <GreetingContainer>
                <GreetingText>
                    {I18n.t('greeting')}
                </GreetingText>
            </GreetingContainer>
        </HomeScreenContainer>
    );
};

const HomeScreenContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;
const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

`;
const GreetingContainer = styled.View`
  align-items: center;
  align-content: center;
  height: 50%;
`;
const GreetingText = styled.Text`
  font-size: 30px;
  color: #df245e;
`;
