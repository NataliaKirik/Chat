import React, { useState } from 'react';
import { Date, MessageContainer, MessageTitle } from '../Message/style';
import { MainContainer } from './style';
import { primaryRed } from '../../common/styles/colors';
import { Text } from 'react-native';
import dateFormatter from 'date-format-conversion';
import { getUsername } from '../../app/asyncStore';


type PropsType = {
    message: string
    date: string
}

export const ChatMessage = ({ message, date }: PropsType) => {
    const [user, setUser] = useState<string | null | void>('');
    const getUser = async () => {
        const result = await getUsername();
        setUser(result);
    };
    getUser();

    const regex = new RegExp(`@(${user})`, 'i');
    const reactStringReplace = require('react-string-replace');
    const result = reactStringReplace(message, regex, (match: string, i: number) =>
        <Text key={i}
              style={{ color: primaryRed }}>@{match}</Text>);

    return (
        <MessageContainer>
            <MainContainer>
                <MessageTitle>{result}</MessageTitle>
                <Date>{dateFormatter(date, 'dd.MM.yyyy')}</Date>
            </MainContainer>
        </MessageContainer>
    );
};
