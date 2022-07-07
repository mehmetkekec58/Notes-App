import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(data)
        );

    } catch (error) {

    }
};

export const retrieveData = async (key, setVeri) => {

    try {

        await AsyncStorage.getItem(key).then((value) => {
            if (value !== null && value !== undefined) {
                setVeri(JSON.parse(value));
            }
        });

    } catch (error) {

    }
};
