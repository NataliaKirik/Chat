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
} from './style';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import I18n from '../../i18n';
import {ForumDataType, IP} from '../../api/api';
import {useDispatch} from 'react-redux';
import {dislikeTC, likeTC} from '../../screens/Messages/bll/forumDataReducer';
import dateFormatter from 'date-format-conversion';

export const Message = ({ date, like, owner, photo, replies, title, id }: ForumDataType) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const onMessagePress = () => {
        navigation.navigate(I18n.t('chatTab'), { id ,owner});
    };
    const onLikePress = () => {
        dispatch(likeTC( id));
    };
    const onDislikePress = () => {
        dispatch(dislikeTC( id));
    };

    return (
        <TouchableOpacity onPress={onMessagePress}>
            <MessageContainer>
                <Avatar source={{ uri: IP + photo }} />
                <MainContainer>
                    <MessageTitle numberOfLines={1}
                                  ellipsizeMode="tail">{title}</MessageTitle>
                    <UserName>{owner}</UserName>
                    <MessageReplies>{`${replies} Replies`}</MessageReplies>
                </MainContainer>

                <LikeAndDateContainer>
                    {like ?
                        (
                            <TouchableOpacity onPress={onDislikePress}>
                                <ImageHeart
                                    color={'#df245e'}
                                    resizeMode={'contain'}
                                    source={require('../../assets/images/like/unLike.png')} />
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity onPress={onLikePress}>
                                <ImageHeart
                                    color={'#6e7f8d'}
                                    resizeMode={'stretch'}
                                    source={require('../../assets/images/like/like.png')} />
                            </TouchableOpacity>
                        )
                    }
                    <Date>
                        {dateFormatter(date, 'dd.MM.yyyy')}
                    </Date>
                </LikeAndDateContainer>
            </MessageContainer>
        </TouchableOpacity>
    );
};


