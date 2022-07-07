import { View, TouchableOpacity, Text } from "react-native"
import { COLOR_LIST } from "../contains/colors"
import { SELECT_COLOR } from "../contains/containTexts"



const RadioColorButton = ({ props }) => {
    const { selectColor, setSelectColor } = props

    const handleSelectColor = (color) => {
        setSelectColor(color);
    }
    return (
        <View>
            <Text style={{ fontSize: 15, marginRight: 10, margin: 2, fontWeight: 'bold', left: 10 }}>{SELECT_COLOR}</Text>
            <View style={{ flexDirection: 'column', display: 'flex', flexDirection: "row", flexWrap: 'wrap', left: 10 }}>
                {COLOR_LIST.map((color, index) => (
                    <TouchableOpacity onPress={() => handleSelectColor(color)} key={index} style={{ backgroundColor: color, width: '10%', borderRadius: 10, margin: 3, borderWidth: selectColor == color ? 4 : 1, height: 40 }}><Text>     </Text></TouchableOpacity>
                ))}

            </View>
        </View>
    )
}

export default RadioColorButton