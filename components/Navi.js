import { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles';

const deleteIcon = "../assets/images/delete-button.png";
const addButtonIcon = "../assets/images/addicon.png";

const Navi = ({ addOrDeleteIcon, setAddOrDeleteIcon, setNoteAdd, noteAdd, style }) => {

    const handleAddOrDeleteIcon = () => {
        if (addOrDeleteIcon) {
            setAddOrDeleteIcon(false)
        } else {
            setAddOrDeleteIcon(true);
        }
    }
    const addTextPage = () => {
        setNoteAdd(true)
    }
    return (
        <View style={style}>

            <View>
                <Text style={noteAdd? styles.naviBrandWithNoteAdd:styles.naviBrand}>Not Defteri</Text>
            </View>
            {noteAdd ?
                null
                :
                <View>
                    <TouchableOpacity onPress={addOrDeleteIcon ? addTextPage : null} style={styles.naviButton}>
                        {addOrDeleteIcon ? <Image style={styles.image} source={require(addButtonIcon)} /> :
                            <Image style={styles.image} source={require(deleteIcon)} />}

                    </TouchableOpacity>
                </View>

            }

        </View>
    )
}

export default Navi