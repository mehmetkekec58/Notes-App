import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../Styles';
import selectCharacter from '../helper/selectCharacterHelper';

const Card = ({ item }) => {

    const { id, message, color } = item

    return (
        <TouchableOpacity style={{
            height: 150,
            width: '45%',
            backgroundColor: color,
            borderRadius: 4,
            borderColor: '#000',
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