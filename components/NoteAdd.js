
import { useState, useEffect } from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, Image, BackHandler, Alert } from 'react-native'
import { styles } from '../Styles';
import randomColor from '../helper/randomColorHelper';
import generateId from '../helper/generateIdHelper';
import { SAVE, CANCEL, WRITE_TEXT, ALERT_CANCEL, ALERT_CANCEL_BODY_TEXT, YES } from '../contains/containTexts';
import date from '../helper/dateHelper';
import RadioColorButton from './RadioColorButton';
import { COLOR_LIST } from '../contains/colors';
import { retrieveData, storeData } from '../services/asyncStorageService';

const crossIcon = "../assets/images/cross.png";
const tickIcon = "../assets/images/tick.png";

const NoteAdd = ({ props }) => {

    const { noteEdit, setNoteEdit, veri, setVeri, setNoteAdd, setKeyboardOpen } = props

    const [inputText, onChangeInputText] = useState(noteEdit != null ? noteEdit.message : "");
    const [selectColor, setSelectColor] = useState(noteEdit != null ? noteEdit.color : COLOR_LIST[0]);

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
    }, [inputText]);


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
            setVeri(veri.map((note) => note.id === noteEdit.id ? { id: noteEdit.id, message: inputText, color: selectColor, date: date() } : note))
            storeData("notes", veri)
            setNoteEdit(null);
            return;
        }
        setVeri([...veri, { id: generateId(veri), message: inputText, color: selectColor, date: date() }])
        storeData("notes", veri)
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
            <RadioColorButton props={{ selectColor: selectColor, setSelectColor: setSelectColor }} />
        </View>
    )
}

export default NoteAdd