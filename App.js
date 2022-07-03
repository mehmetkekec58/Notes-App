import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View ,ScrollView} from 'react-native';
import Card from './components/Card';
import Input from './components/Input';
import Navi from './components/Navi';
import { styles } from './Styles';

const data=[
  {
    id:0,
    message:"selam dünya",
    color:'#8eabdc',
  },
  {
    id:1,
    message:"React ile geliştirilecek sistem component’lerden oluşur. Her component kendi içinde kullanacağı veriyi ya props üzerinden ya da state üzerinden alarak kullanır",
    color:'#c78aad',
  },
  {
    id:2,
    message:"Konu tercihlerle ilişkili bir konu, eğer react dünyasının getirdiklerini standart bir yaklaşımla kullanmak isterseniz bence değiyor",
    color:'#e1a69e',
  },
  {
    id:3,
    message:"Hello World",
    color:'grey',
  },
  {
    id:4,
    message:"Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color:'#f2f2f2',
  },
  {
    id:5,
    message:"Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color:'brown',
  },

  {
    id:6,
    message:"Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color:'lightblue',
  },

  {
    id:7,
    message:"Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color:'blue',
  },
  {
    id:8,
    message:"Hello World",
    color:'yellow',
  },
  {
    id:9,
    message:"Hello World",
    color:'yellow',
  },
]

export default function App() {
  const [keyboardOpen, setKeyboardOpen] = useState(undefined);
  return (

    <View style={styles.container}>

      <Navi style={keyboardOpen ? styles.navigateStyleWithKeyboardOpen : styles.navigate} />
      <Input setKeyboardOpen={setKeyboardOpen} />
      <ScrollView style={styles.scroll}>
        <View style={{ flexDirection: "row",
    flexWrap:'wrap'}}>
      {data.map((item)=>(
        <Card key={item.id} item={item}/>
      ))}
     </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>

  );
}

