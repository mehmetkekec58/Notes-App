
import { useState, useEffect } from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles';
import randomColor from '../helper/randomColorHelper';
import generateId from '../helper/generateIdHelper';
import { SAVE, CANCEL, WRITE_TEXT } from '../contains/containTexts';
const crossIcon = "../assets/images/cross.png";
const tickIcon = "../assets/images/tick.png";

const NoteAdd = ({ veri, setVeri, setNoteAdd, keyboardOpen, setKeyboardOpen }) => {

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

    const handleCancel = () => {
        setNoteAdd(false)
    }
    const handleSave = () => {
        if(inputText == null || inputText==undefined|| inputText.length<=0){
            return;
        }
        
        let array = veri;
        array[array==null || array==undefined ? 0 :array.length] = { id: generateId(array), message: inputText, color: randomColor() };
        setVeri(array)
        handleCancel();
    }


    return (
        <View style={{ display: 'flex' }}>

            <TextInput
                multiline
                style={styles.addNoteInput}
                onChangeText={onChangeInputText}
                value={inputText}
                placeholder={WRITE_TEXT}
                onSubmitEditing={Keyboard.dismiss} />
            <View style={{
                flexDirection: "row",
                flexWrap: 'wrap', left: '3%'
            }}>
                <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                    <Image style={styles.image} source={require(crossIcon)} />
                    <Text>{CANCEL}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                    <Image style={styles.image} source={require(tickIcon)} />
                    <Text>{SAVE}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteAdd