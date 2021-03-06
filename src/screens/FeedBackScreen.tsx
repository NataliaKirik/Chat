import React, {FC} from "react";
import styled from 'styled-components/native'
import {ScrollView} from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper'
import I18n from '../i18n';


export const FeedBackScreen: FC = () => {
    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });
    return (
        <ScreenContainer>
            <ScrollView>
                <FormBuilder
                    control={control}
                    setFocus={setFocus}
                    formConfigArray={[
                        {
                            type: 'email',
                            name: 'email',

                            rules: {
                                required: {
                                    value: true,
                                    message: I18n.t('emailWarning'),
                                },
                                pattern: {
                                    value:
                                        /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/,
                                    message: I18n.t('checkingEmailWarning'),
                                },
                            },
                            textInputProps: {
                                label: I18n.t('email'),
                            },
                        },
                        {
                            type: 'password',
                            name: 'password',
                            rules: {
                                required: {
                                    value: true,
                                    message: I18n.t('passwordWarning'),
                                },
                                minLength: {
                                    value: 5,
                                    message: I18n.t('passwordWarningMinLength'),
                                },
                                maxLength: {
                                    value: 15,
                                    message: I18n.t('passwordWarningMaxLength'),
                                },
                            },
                            textInputProps: {
                                label: I18n.t('password'),
                            },
                        },
                        {
                            name: 'message',
                            type: 'text',
                            rules: {
                                required: {
                                    value: false,
                                    message: I18n.t('messageWarning'),
                                },
                            },
                            textInputProps: {
                                label: I18n.t('message'),
                            },
                        }
                    ]}
                />
                <Button
                    mode={'contained'}
                    onPress={handleSubmit((data: any) => {
                        console.log('form data', data);
                    })}>
                    {I18n.t('submit')}
                </Button>
            </ScrollView>
        </ScreenContainer>
    );
};

const ScreenContainer = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
`;

