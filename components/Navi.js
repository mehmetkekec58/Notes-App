import { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Styles';
const url = "../assets/images/delete-button.png";

const Navi = ({style}) => {
    const [login, setLogin] = useState(true);
  
    const handleLogin = () => {
        if (login) {
            setLogin(false)
        } else {
            setLogin(true);
        }
    }
    return (
        <View style={style}>
            <View>
                <Text style={styles.naviBrand}>Not Defteri</Text>
            </View>
            <View>
            <TouchableOpacity  onPress={handleLogin} style={styles.button}>
                {login ? <Image  style={styles.image} source={require(url)} /> :
                 <Text></Text>}
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Navi