import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Card from './components/Card';
import Input from './components/Input';
import Navi from './components/Navi';
import NoteAdd from './components/NoteAdd';
import { styles } from './Styles';

const datas = [
  {
    id: 0,
    message: "selam dünya",
    color: '#8eabdc',
  },
  {
    id: 1,
    message: "React ile geliştirilecek sistem component’lerden oluşur. Her component kendi içinde kullanacağı veriyi ya props üzerinden ya da state üzerinden alarak kullanır",
    color: '#c78aad',
  },
  {
    id: 2,
    message: "Konu tercihlerle ilişkili bir konu, eğer react dünyasının getirdiklerini standart bir yaklaşımla kullanmak isterseniz bence değiyor",
    color: '#e1a69e',
  },
  {
    id: 3,
    message: "Hello World",
    color: 'grey',
  },
  {
    id: 4,
    message: "Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color: '#f2f2f2',
  },
  {
    id: 5,
    message: "Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color: 'brown',
  },

  {
    id: 6,
    message: "Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color: 'lightblue',
  },

  {
    id: 7,
    message: "Redux yapısını kullanacaksanız, öncelikle Redux Dev Tool’un chrome extension’ı kurmanızı tavsiye ederim",
    color: '#00FF00',
  },
  {
    id: 8,
    message: "Hello World",
    color: 'yellow',
  },
  {
    id: 9,
    message: "Bilgiye ulaşmanın hem çok kolay hem de çok zor olduğu şu son zamanlarda, insanların bilgi ihtiyacını karşılamak için ille de basılı kaynaklara yönelmelerini beklemek oldukça yanlış bir düşünce biçimidir.",
    color: 'yellow',
  },
]
function dataSort(datas) {
  let noteDatas = datas
  noteDatas.sort(function (a, b) {
    return b.id - a.id;
  })
  return noteDatas;
}


export default function App() {
  const [veri, setVeri] = useState(datas)
  const [addOrDeleteIcon, setAddOrDeleteIcon] = useState(true);
  const [data, setData] = useState(veri)
  const [noteAdd, setNoteAdd] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(undefined);

  return (
    <View style={styles.container}>
      <Navi addOrDeleteIcon={addOrDeleteIcon} noteAdd={noteAdd} setAddOrDeleteIcon={setAddOrDeleteIcon} setNoteAdd={setNoteAdd} style={keyboardOpen ? styles.navigateStyleWithKeyboardOpen : styles.navigate} />

      {noteAdd ?
        <NoteAdd veri={veri} setVeri={setVeri} setNoteAdd={setNoteAdd} setKeyboardOpen={setKeyboardOpen} />
        :
        (<View>
          <Input datas={veri} data={data} setData={setData} setKeyboardOpen={setKeyboardOpen} />
          <ScrollView style={styles.scroll}>
            <View style={{
              flexDirection: "row",
              flexWrap: 'wrap',
              marginBottom: 130,
              marginTop: 20,
            }}>
              {dataSort(data).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>

        )
      }
      <StatusBar style="auto" />
    </View>

  );
}

