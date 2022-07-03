import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { color } from '../contains/Colors';
import { styles } from '../Styles';

function substringText(text, number) {
    return text.substring(0, number);
}
function selectCharacter(text) {
    let number = 140
    return text.length > number ? `${substringText(text, number)}...` : text
}
function randomColor() {
    return color[Math.floor(Math.random() * color.length)]
}

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