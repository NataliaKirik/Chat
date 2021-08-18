import React from 'react';
import {Date, MessageContainer, MessageTitle} from '../Message/style';
import {MainContainer, UserName, UserNameContainer} from './style';
import {primaryRed} from '../../common/styles/colors';
import {Text} from 'react-native';
import dateFormatter from 'date-format-conversion';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";


type PropsType = {
    senderName: string
    message: string
    date: string
}

export const ChatMessage = ({senderName, message, date}: PropsType) => {
    const username = useSelector<AppRootStateType, string>(state => state.loginName.loginName);
    const regex = new RegExp(`@(${username})`, 'i')
    const reactStringReplace = require('react-string-replace')
    const result = reactStringReplace(message, regex, (match: string, i: number) =>
        <Text key={i}
              style={{color: primaryRed}}>@{match}</Text>)

    return (
        <MessageContainer>
            <MainContainer>
                <MessageTitle>{result}</MessageTitle>
                <UserNameContainer>
                    <UserName>From: </UserName>
                    <UserName>{senderName}</UserName>
                </UserNameContainer>
                <Date>{dateFormatter(date, 'dd.MM.yyyy')}</Date>
            </MainContainer>
        </MessageContainer>
    );
};
