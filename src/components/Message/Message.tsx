import React from "react";
import {
    Avatar,
    Date,
    ImageHeart,
    LikeAndDateContainer,
    MainContainer,
    MessageContainer,
    MessageReplies,
    MessageTitle,
    UserName
} from "./MessageStyledConst";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

type MessagePropsType = {
    date: string
    like: boolean
    name: string
    photo: {}
    replies: number
    title: string

}

export const Message = ({date, like, name, photo, replies, title}: MessagePropsType) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('User\'s message')}>
            <MessageContainer>
                <Avatar source={photo}/>
                <MainContainer>
                    <MessageTitle numberOfLines={1}
                                  ellipsizeMode="tail">{title}</MessageTitle>
                    <UserName>{name}</UserName>
                    <MessageReplies>{`${replies} Replies`}</MessageReplies>
                </MainContainer>

                <LikeAndDateContainer>
                    {like ?
                        (<ImageHeart
                            color={"#df245e"}
                            resizeMode={"contain"}
                            source={require("../../assets/images/like/unLike.png")}/>)
                        :
                        (<ImageHeart
                            color={"#6e7f8d"}
                            resizeMode={"stretch"}
                            source={require("../../assets/images/like/like.png")}/>)
                    }
                    <Date>
                        {date.slice(0, 10)}
                    </Date>
                </LikeAndDateContainer>
            </MessageContainer>
        </TouchableOpacity>
    );
};


