import React from "react";
import {Date, MessageContainer, MessageTitle} from "../Message/MessageStyledConst";
import {MainContainer, UserName, UserNameContainer} from "./ChatMessageStyledConst";
import {primaryRed} from "../../common/styles/colors";

type PropsType = {
    senderName: string
    message: string
    date: string
}

export const ChatMessage = ({senderName, message, date}: PropsType) => {
    return (
        <MessageContainer>
            <MainContainer>
                <MessageTitle>{message}</MessageTitle>
                <UserNameContainer>
                    <UserName>From: </UserName>
                    <UserName color={primaryRed}>{senderName}</UserName>
                </UserNameContainer>
                <Date> {date.slice(0, 10)}</Date>
            </MainContainer>
        </MessageContainer>
    )
}


