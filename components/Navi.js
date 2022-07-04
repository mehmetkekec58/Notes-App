import { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { BRAND_NAME } from '../contains/containTexts';
import { styles } from '../Styles';

const deleteIcon = "../assets/images/delete-button.png";
const addButtonIcon = "../assets/images/addicon.png";

const Navi = ({ veri, setVeri, setSelectedId, selectedId, addOrDeleteIcon, setAddOrDeleteIcon, setNoteAdd, noteAdd, style }) => {

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
    const handleDelete = () => {
        setVeri(deleteData(selectedId, veri))
        setAddOrDeleteIcon(true);

    }
    function deleteData(selectId, data) {
        let array = [];
        for (let i = 0; i < data.length; i++) {
            isThere = false;
            for (let j = 0; j < selectId.length; j++) {
                if (data[i].id === selectId[j]) {
                    isThere = true;
                }
            }
            if (!isThere) {
                array[array.length] = data[i]
            }
        }
        return array;
    }
    function selectedCount() {
        return selectedId.length;
    }
    return (
        <View style={style}>

            <View>
                <Text style={noteAdd ? styles.naviBrandWithNoteAdd : styles.naviBrand}>{BRAND_NAME}</Text>
            </View>
            {noteAdd ?
                null
                :
                <View>
                
                    <TouchableOpacity onPress={addOrDeleteIcon ? addTextPage : handleDelete} style={styles.naviButton}>
                        {addOrDeleteIcon ? <Image style={styles.image} source={require(addButtonIcon)} /> :
                            <View>
                              
                                <Image style={styles.image} source={require(deleteIcon)} />
                            </View>}

                    </TouchableOpacity>
                </View>

            }

        </View>
    )
}

export default Navi