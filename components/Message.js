import React from "react";
import {StyleSheet, View} from "react-native";
import {
    Avatar,
    Date,
    ImageHeart,
    MainContainer,
    MessageContainer,
    MessageReplies,
    MessageTitle,
    UserName,
} from "../styled_const/MessageStyledConst";


export const Message = ({date, like, name, photo, replies, title}) => {
    return (
        <MessageContainer>
            <Avatar source={photo}/>
            <MainContainer>
                <MessageTitle numberOfLines={1}
                              ellipsizeMode="tail">{title}</MessageTitle>
                <UserName>{name}</UserName>
                <MessageReplies>{`${replies} Replies`}</MessageReplies>
            </MainContainer>

            <View style={styles.heartAndDateContainer}>
                {like ?
                    (<ImageHeart
                        color={"#df245e"}
                        resizeMode={"contain"}
                        source={require("../assets/SeekPng.com_heart-png-transparent_155396.png")}/>)
                    :
                    (<ImageHeart
                        color={"#6e7f8d"}
                        resizeMode={"stretch"}
                        source={require("../assets/unnamed.png")}/>)
                }
                <Date>
                    {date.slice(0, 10)}
                </Date>
            </View>

        </MessageContainer>
    );
};

const styles = StyleSheet.create({
    heartAndDateContainer: {
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
});

