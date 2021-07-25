import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";


const MessageContainer = styled.View`
  background-color: white;
  margin: 7px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
`;

const Avatar = styled.Image`
  border: 1px solid black;
`;
const MainContainer = styled.View`
  justify-content: space-between;
  width: 50%;
  padding: 0 0 0 5px;
`;
const MessageTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #222222;
`;
const UserName = styled.Text`
  font-size: 15px;
  color: #4f5153;
  text-align: left;
`;
const MessageReplies = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #222222;
`;
const ImageHeart = styled.Image`
  width: 20px;
  height: 20px;
  color: ${props => props.color};`;
const Date = styled.Text`
  color: #6e7f8d;
  font-size: 14px;
`;

export const Message = ({ date, like, name, photo, replies, title }) => {
  return (
    <MessageContainer>

      <Avatar source={photo} />

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
            source={require("../assets/SeekPng.com_heart-png-transparent_155396.png")} />)
          :
          (<ImageHeart
            color={"#6e7f8d"}
            resizeMode={"stretch"}
            source={require("../assets/unnamed.png")} />)
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

