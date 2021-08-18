import React, {FC} from "react";
import {Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import I18n from '../../i18n';
import {ButtonsContainer, GreetingContainer, GreetingText, HomeScreenContainer} from "./style"
import {getUsername} from "../../app/asyncStore";


export const HomeScreen: FC = () => {
    const navigation = useNavigation();
    const username = getUsername();

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
                    {I18n.t('greeting')}, {username}!
                </GreetingText>
            </GreetingContainer>
        </HomeScreenContainer>
    );
};
