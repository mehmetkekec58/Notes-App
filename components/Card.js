import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../Styles';
import selectCharacter from '../helper/selectCharacterHelper';

const Card = ({ item, setSelectedId, selectedId, setAddOrDeleteIcon, addOrDeleteIcon }) => {

    const { id, message, color } = item

    const handleLongPress = (id) => {
        if (addOrDeleteIcon) {
            setAddOrDeleteIcon(false)
            setSelectedId([id])

        } else {
            setAddOrDeleteIcon(true)
            setSelectedId([])

        }
    }
    const handlePress = (id) => {
        if (addOrDeleteIcon) {

        } else {

            if (selectedId.includes(id)) {
                setSelectedId(selectedId.filter((e) => (e !== id)));

            } else {
                setSelectedId([...selectedId, id]);

            }

        }

    }
    function handleSelectForDelete(selectId, id) {
        return selectId.includes(id);
    }

    return (
        <TouchableOpacity onLongPress={(e) => handleLongPress(id)} onPress={(e) => handlePress(id)} style={{
            height: 150,
            width: '45%',
            backgroundColor: color,
            borderRadius: 4,
            borderWidth: !addOrDeleteIcon && handleSelectForDelete(selectedId, id) ? 3 : 0,
            borderColor: 'red',
            marginLeft: 12,
            marginTop: 8,
            marginBottom: 15,
            padding: 5,
            shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: '0.9',
            shadowRadius: 15.19,

            elevation: 23,

        }}>
            <Text style={styles.cardText}>{selectCharacter(message)}</Text>
        </TouchableOpacity>
    )
}

export default Card