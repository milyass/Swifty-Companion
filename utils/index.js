import AsyncStorage from '@react-native-async-storage/async-storage';

module.exports = {
    storageHandler: async (keyname) => {
        await AsyncStorage.setItem(
            'FortyTwoToken',
            response.data?.access_token,
          );
    }
}