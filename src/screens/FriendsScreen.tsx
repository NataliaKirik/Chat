import React, {FC} from "react";
import {Button} from "react-native";
import styled from 'styled-components/native'
import {useNavigation} from "@react-navigation/native";
import I18n from "../i18n";


export const FriendScreen: FC = () => {
    const navigation = useNavigation();

    return (
        <FriendScreenContainer>
            <Button
                title={I18n.t('userMessages')}
                onPress={() => navigation.navigate(I18n.t('tabMessages'), {screen: I18n.t('userMessages')})}
            />
        </FriendScreenContainer>
    );
};

const FriendScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
