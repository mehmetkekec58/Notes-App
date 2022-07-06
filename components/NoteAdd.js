
import { useState, useEffect } from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Image, BackHandler, Alert } from 'react-native'
import { styles } from '../Styles';
import randomColor from '../helper/randomColorHelper';
import generateId from '../helper/generateIdHelper';
import { SAVE, CANCEL, WRITE_TEXT, ALERT_CANCEL, ALERT_CANCEL_BODY_TEXT, YES } from '../contains/containTexts';
import date from '../helper/dateHelper';
import RadioColorButton from './RadioColorButton';
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

    useEffect(() => {


        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    const backAction = () => {
        if (inputText == "" && noteEdit == null || noteEdit != null && noteEdit.message == inputText) {
            handleCancel()
            return true;
        }
        Alert.alert(ALERT_CANCEL, ALERT_CANCEL_BODY_TEXT, [
            {
                text: CANCEL,
                onPress: () => null,

            },
            { text: YES, onPress: () => handleCancel() }
        ]);
        return true;
    };

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
            setVeri(veri.map((e) => e.id === noteEdit.id ? { id: noteEdit.id, message: inputText, color: noteEdit.color, date: date() } : e))
            setNoteEdit(null);
            return;
        }
        setVeri([...veri, { id: generateId(veri), message: inputText, color: randomColor(), date: date() }])
        handleCancel();
    }

    return (
        <View style={{ display: 'flex' }}>
            {noteEdit != null ? <Text style={styles.noteEditDateText}>{noteEdit.date}</Text> : null}
            <TextInput
                multiline
                style={styles.addNoteInput}
                onChangeText={onChangeInputText}
                value={inputText}
                placeholder={WRITE_TEXT}
                onSubmitEditing={Keyboard.dismiss} />

            <View style={styles.noteSaveButtonsView}>
                <TouchableOpacity onPress={() => backAction()} style={styles.cancelButton}>
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