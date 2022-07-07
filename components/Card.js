import { useEffect } from 'react'
import { Text, TouchableOpacity, BackHandler } from 'react-native'
import { styles } from '../Styles';
import selectCharacter from '../helper/selectCharacterHelper';

const Card = ({ item, props }) => {
    const { setNoteEdit, setSelectedId, selectedId, setAddOrDeleteIcon, addOrDeleteIcon } = props
    const { id, message, color } = item

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            cancelDeleteMode
        );

        return () => backHandler.remove();

    }, [addOrDeleteIcon]);

    const cancelDeleteMode = () => {
        if (!addOrDeleteIcon) {
            setAddOrDeleteIcon(true)
            return true;
        } else {
            BackHandler.exitApp()
        }
    }
    const handleLongPress = (id) => {
        if (addOrDeleteIcon) {
            setAddOrDeleteIcon(false)
            setSelectedId([id])

        } else {
            setAddOrDeleteIcon(true)
            setSelectedId([])

        }
    }
    const handlePress = (item) => {
        const { id } = item
        if (addOrDeleteIcon) {
            setNoteEdit(item);
        } else {

            if (selectedId.includes(id)) {
                setSelectedId(selectedId.filter((e) => (e !== id)));
                if (selectedId.length - 1 == 0) {
                    setAddOrDeleteIcon(true)
                    return;
                }

            } else {
                setSelectedId([...selectedId, id]);

            }

        }

    }
    function handleSelectForDelete(selectId, id) {
        return selectId.includes(id);
    }


    return (
        <TouchableOpacity onLongPress={(e) => handleLongPress(id)} onPress={(e) => handlePress(item)} style={{
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