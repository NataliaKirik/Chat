import React from 'react';
import {Date, MessageContainer, MessageTitle} from '../Message/MessageStyledConst';
import {MainContainer, UserName, UserNameContainer} from './ChatMessageStyledConst';
import {primaryRed} from '../../common/styles/colors';
import {Text} from 'react-native';
import dateFormatter from 'date-format-conversion';


type PropsType = {
    senderName: string
    message: string
    date: string
}

export const ChatMessage = ({senderName, message, date}: PropsType) => {
    // /(^|[^@\w+])@(\w{1,15})\b/g
    // /@(\w+)/g
    const regex = new RegExp(`@(${senderName})`)
    const reactStringReplace = require('react-string-replace')
    const result = reactStringReplace(message, regex, (match: string, i: number) => <Text key={i}
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
