import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUsername = (value: string) => {
    AsyncStorage.setItem('@storage_Username', value).catch(console.log);
};

const getUsername = () => {
    return AsyncStorage.getItem('@storage_Username').catch(console.log);
};
const deleteUsername = () => {
    return AsyncStorage.removeItem('@storage_Username').catch(console.log);
};
// showAsyncStorageContentInDev()

export { storeUsername, getUsername, deleteUsername };
