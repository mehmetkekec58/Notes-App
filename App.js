import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, ScrollView, Keyboard } from 'react-native';
import Card from './components/Card';
import Input from './components/Input';
import Navi from './components/Navi';
import NoteAdd from './components/NoteAdd';
import { styles } from './Styles';
import dataSort from './helper/dataSortHelper';
import NoNote from './components/NoNote';
import { retrieveData, storeData } from './services/asyncStorageService';

export default function App() {

  const [veri, setVeri] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [addOrDeleteIcon, setAddOrDeleteIcon] = useState(true);
  const [data, setData] = useState(veri);
  const [noteAdd, setNoteAdd] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(undefined);
  const [selectedId, setSelectedId] = useState([])
  const [noteEdit, setNoteEdit] = useState(null);

  useEffect(() => {
    if (isLoading != true) {
      retrieve()
      setIsLoading(true);

    }
    setData(veri);
    storeData("notes", JSON.stringify(veri));

  }, [veri])



  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  const retrieve = async () => {
    await retrieveData("notes", setVeri)
  }


  return (
    <View style={styles.container}>
      <Navi props={{ data: data, noteEdit: noteEdit, veri: veri, setVeri: setVeri, setSelectedId: setSelectedId, selectedId: selectedId, addOrDeleteIcon: addOrDeleteIcon, setAddOrDeleteIcon: setAddOrDeleteIcon, setNoteAdd: setNoteAdd, noteAdd: noteAdd }} style={keyboardOpen ? styles.navigateStyleWithKeyboardOpen : styles.navigate} />
      {noteAdd || noteEdit != null ?
        <NoteAdd props={{ noteEdit: noteEdit, setNoteEdit: setNoteEdit, veri: veri, setVeri: setVeri, setNoteAdd: setNoteAdd }} />
        :
        (<View>
          <Input props={{ setSelectedId: setSelectedId, selectedId: selectedId, datas: veri, data: data, setData: setData}} />
          {data == null || data == undefined || data.length <= 0 ?
            <NoNote />
            :
            (
              <ScrollView style={styles.scroll}>
                <View style={styles.viewForCard}>
                  {dataSort(data).map((item) => (
                    <Card key={item.id} item={item} props={{ setNoteEdit: setNoteEdit, setSelectedId: setSelectedId, selectedId: selectedId, setAddOrDeleteIcon: setAddOrDeleteIcon, addOrDeleteIcon: addOrDeleteIcon }} />
                  ))}
                </View>
              </ScrollView>
            )
          }
        </View>
        )
      }

      <StatusBar style="auto" backgroundColor='#2b90c7' />
    </View>


  );
}

