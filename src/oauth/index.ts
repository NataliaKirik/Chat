import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { storeUsername } from '../app/asyncStore';
import { setLocationAC } from '../app/bll/contentReducer';
import { useDispatch } from 'react-redux';

export const onPressGoogleBtn = () => {
    GoogleSignin.configure({
        webClientId: '773868382019-87h2nk10fo8106if8q3evdic2dcau4jt.apps.googleusercontent.com'
    });

    const signIn = async () => {
        const dispatch = useDispatch();
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await storeUsername(userInfo.user.givenName!);
            dispatch(setLocationAC({ screen: 'app' }));
        } catch (error) {
            console.log(error.message);
        }
    };
    signIn();
};
