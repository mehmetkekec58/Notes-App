import { TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles';
import { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';

const Input = ({ datas, data, setData, keyboardOpen, setKeyboardOpen }) => {


    const [inputText, onChangeInputText] = useState(null);

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

    useEffect(() => {
        if (inputText == null || inputText == undefined || inputText == "") {
            setData(datas)
       
        } else {
            let array = []
            datas.map((e) => {
                if (e.message.toLowerCase().includes(inputText.toLowerCase())) {
                    array[array.length] = e;
                }
            })
            setData(array)
         
        }
    }, [inputText])


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeInputText}
                value={inputText}
              
                placeholder="Not Ara"
                onSubmitEditing={Keyboard.dismiss} />
         
        </View>
    )
}

export default Input