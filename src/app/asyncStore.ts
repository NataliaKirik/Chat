import AsyncStorage from '@react-native-async-storage/async-storage';

// const storeUsername = (value: string) => {
//     AsyncStorage.setItem('@storage_Username', value).catch(console.log);
// }
//
// const getUsername = () => {
//     return AsyncStorage.getItem('@storage_Username').catch(console.log);
// }

// showAsyncStorageContentInDev()

const storeUsername = async (value: string) => {
    try {
        await AsyncStorage.setItem('@storage_Username', value);
    } catch (error) {
        console.log(error);
    }
}

const getUsername = async () => {
    try {
        return AsyncStorage.getItem('@storage_Username');
    } catch (error) {
        console.log(error);
    }
}
const deleteUsername = async () => {
    try {
        await AsyncStorage.removeItem('@storage_Username');
    } catch (error) {
        console.log(error);
    }
}


export {storeUsername, getUsername, deleteUsername};
