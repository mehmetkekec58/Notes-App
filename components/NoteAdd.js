
import { useState, useEffect } from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles';
import randomColor from '../helper/randomColorHelper';
import generateId from '../helper/generateIdHelper';
import { SAVE, CANCEL, WRITE_TEXT } from '../contains/containTexts';
const crossIcon = "../assets/images/cross.png";
const tickIcon = "../assets/images/tick.png";

const NoteAdd = ({ props }) => {

    const { noteEdit, setNoteEdit, veri, setVeri, setNoteAdd, setKeyboardOpen } = props

    const [inputText, onChangeInputText] = useState(noteEdit != null ? noteEdit.message : "");

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
        if (noteEdit != null) {
            setNoteEdit(null)
        }
    }
    const handleSave = () => {
        if (inputText == null || inputText == undefined || inputText.length <= 0) {
            return;
        }
        if (noteEdit != null) {
            setVeri(veri.map((e) => e.id === noteEdit.id ? { id: noteEdit.id, message: inputText, color: noteEdit.color } : e))
            setNoteEdit(null);
            return;
        }
        setVeri([...veri, { id: generateId(veri), message: inputText, color: randomColor() }])
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
            <View style={styles.noteSaveButtonsView}>
                <TouchableOpacity onPress={() => handleCancel()} style={styles.cancelButton}>
                    <Image style={styles.image} source={require(crossIcon)} />
                    <Text>{CANCEL}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSave()} style={styles.saveButton}>
                    <Image style={styles.image} source={require(tickIcon)} />
                    <Text>{SAVE}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteAdd