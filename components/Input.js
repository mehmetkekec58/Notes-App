import { TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles';
import { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';
import { SEARCH_NOTE } from '../contains/containTexts';

const Input = ({ props }) => {
    const { datas, setData, setKeyboardOpen, setSelectedId, selectedId } = props
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
        if (selectedId.length != 0) {
            setSelectedId([])
        }
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
                placeholder={SEARCH_NOTE}
                onSubmitEditing={Keyboard.dismiss} />
        </View>
    )
}

export default Input