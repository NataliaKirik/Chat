import React, { FC, useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import I18n from '../../i18n';
import { ButtonsContainer, GreetingContainer, GreetingText, HomeScreenContainer } from './style';
import { getUsername } from '../../app/asyncStore';


export const HomeScreen: FC = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState<string | null | void>('');
    const getUser = async () => {
        const result = await getUsername();
        setUser(result);
    };
    getUser();

    return (
        <HomeScreenContainer>
            <ButtonsContainer>
                <Button
                    title={I18n.t('tabFriends')}
                    onPress={() => navigation.navigate('Friends')}
                />
                <Button
                    title={I18n.t('tabFeedBack')}
                    onPress={() => navigation.navigate('FeedBack Form')}
                />
            </ButtonsContainer>
            <GreetingContainer>
                <GreetingText>
                    {I18n.t('greeting')}, {user}!
                </GreetingText>
            </GreetingContainer>
        </HomeScreenContainer>
    );
};
