import React from 'react';
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
} from './MessageStyledConst';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import I18n from '../../i18n';
import {IP} from '../../api/api';

type MessagePropsType = {
    date: string
    like: boolean
    owner: string
    photo: {}
    replies: number
    title: string

}

export const Message = ({date, like, owner, photo, replies, title}: MessagePropsType) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(I18n.t('userMessages'))}>
            <MessageContainer>
                <Avatar source={{uri: IP + photo}}/>
                <MainContainer>
                    <MessageTitle numberOfLines={1}
                                  ellipsizeMode="tail">{title}</MessageTitle>
                    <UserName>{owner}</UserName>
                    <MessageReplies>{`${replies} Replies`}</MessageReplies>
                </MainContainer>

                <LikeAndDateContainer>
                    {like ?
                        (<ImageHeart
                            color={'#df245e'}
                            resizeMode={'contain'}
                            source={require('../../assets/images/like/unLike.png')}/>)
                        :
                        (<ImageHeart
                            color={'#6e7f8d'}
                            resizeMode={'stretch'}
                            source={require('../../assets/images/like/like.png')}/>)
                    }
                    <Date>
                        {date.slice(0, 10)}
                    </Date>
                </LikeAndDateContainer>
            </MessageContainer>
        </TouchableOpacity>
    );
};


