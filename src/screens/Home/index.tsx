import React, { FC, useState } from 'react';
import I18n from '../../i18n';
import { ButtonsContainer, GreetingContainer, GreetingText, HomeScreenContainer } from './style';
import { getUsername } from '../../app/asyncStore';


export const HomeScreen: FC = () => {
    const [user, setUser] = useState<string | null | void>('');
    const getUser = async () => {
        const result = await getUsername();
        setUser(result);
    };
    getUser();

    return (
        <HomeScreenContainer>
            <ButtonsContainer>
                {/*    <Button*/}
                {/*        title={I18n.t('tabFriends')}*/}
                {/*        onPress={() => navigation.navigate('Friends')}*/}
                {/*    />*/}
            </ButtonsContainer>
            <GreetingContainer>
                <GreetingText>
                    {I18n.t('greeting')}, {user}!
                </GreetingText>
            </GreetingContainer>
        </HomeScreenContainer>
    );
};
