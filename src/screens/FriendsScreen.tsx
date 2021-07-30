import React, {FC} from "react";
import {Button} from "react-native";
import styled from 'styled-components/native'
import {useNavigation} from "@react-navigation/native";
import I18n from "../i18n";


export const FriendScreen: FC = () => {
    const navigation = useNavigation();
    const tabMessages = I18n.t('tabMessages')

    return (
        <FriendScreenContainer>
            <Button
                title={I18n.t('userMessages')}
                onPress={() => navigation.navigate(tabMessages, {screen: 'User\'s message'})}
            />
        </FriendScreenContainer>
    );
};

const FriendScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
