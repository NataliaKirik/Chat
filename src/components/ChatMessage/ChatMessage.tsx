import React from 'react';
import { Date, MessageContainer, MessageTitle } from '../Message/MessageStyledConst';
import { MainContainer, Mention, UserName, UserNameContainer } from './ChatMessageStyledConst';
import { primaryRed } from '../../common/styles/colors';

type PropsType = {
    senderName: string
    message: string
    date: string
}

export const ChatMessage = ({ senderName, message, date }: PropsType) => {
    const regex = /(^|[^@\w])@(\w{1,15})\b/g,
        replace = '$1<Mention>@$2</Mention>';
    const formattedMessage = message.replace(regex, replace);
    // const str = 'Hey this a sample string.'
    // const result = reactStringReplace(str, /(sample)/g, (match, i) => <span key={i} style={{fontStyle: 'italic'}}>{match}</span>)
    return (
        <MessageContainer>
            <MainContainer>
                <MessageTitle>{formattedMessage}</MessageTitle>
                <UserNameContainer>
                    <UserName>From: </UserName>
                    <UserName color={primaryRed}>{senderName}</UserName>
                </UserNameContainer>
                <Date> {date.slice(0, 10)}</Date>
            </MainContainer>
        </MessageContainer>
    );
};


