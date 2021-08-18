import React, {FC, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Message} from '../../../components/Message';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../app/store';
import {getForumAllDataTC} from '../bll/forumDataReducer';
import {ForumDataType} from '../../../api/api';
import {DropShadowStyled} from './style';


export const MessageScreen: FC = () => {
    const dispatch = useDispatch();
    const data = useSelector<AppRootStateType, Array<ForumDataType>>(state => state.forum.data);

    useEffect(() => {
        dispatch(getForumAllDataTC());
    }, [data, dispatch]);

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <DropShadowStyled>
                        <Message {...item} />
                    </DropShadowStyled>
                )}
                keyExtractor={(_, index) => 'List-' + index}
                CellRendererComponent={DropShadow}
            />
        </SafeAreaView>
    );
};
