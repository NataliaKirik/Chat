import React, {FC} from "react";
import {Text} from "react-native";
import styled from 'styled-components/native'
import I18n from "../i18n";


export const UserMessagesScreen: FC = () => {
    return (
        <UserMessagesScreenContainer>
            <Text>{I18n.t('userMessages')}</Text>
        </UserMessagesScreenContainer>
    );
};

const UserMessagesScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
