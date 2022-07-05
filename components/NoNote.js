import { Text, View, Image } from "react-native"
import { NO_NOTE } from "../contains/containTexts"
import { styles } from "../Styles"

const boxIcon = "../assets/images/box.png"

const NoNote = () => {
    return (
        <View style={styles.noNoteView}>
            <Text style={styles.noNoteText}>{NO_NOTE}</Text>
            <Image style={styles.boxIcon} source={require(boxIcon)} />
        </View>
    )
}

export default NoNote