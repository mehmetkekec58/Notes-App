import { TextInput, TouchableOpacity,Image } from 'react-native'
import { styles } from '../Styles';
import { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';

const Input = ({ keyboardOpen, setKeyboardOpen }) => {
     let searchIcon = "../assets/images/search_icon.png";

    const [number, onChangeNumber] = useState(null);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardOpen(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardOpen(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Not Ara"
                onSubmitEditing={Keyboard.dismiss} />

            <TouchableOpacity style={styles.inputButton}>
            <Image  style={styles.image} source={require(searchIcon)} />
            </TouchableOpacity>
        </View>
    )
}

export default Input