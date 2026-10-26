import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { BRAND_NAME, DROP_ALL, SELECT_ALL } from '../contains/containTexts';
import { styles } from '../Styles';

const deleteIcon = "../assets/images/delete-button.png";
const addButtonIcon = "../assets/images/addicon.png";

const Navi = ({ props, style }) => {
    const { data, veri, noteEdit, setVeri, setSelectedId, selectedId, addOrDeleteIcon, setAddOrDeleteIcon, setNoteAdd, noteAdd } = props;
    const [allSelectMode, setAllSelectMode] = useState(true);

    useEffect(() => {
        setAllSelectMode(allCount() == selectedCount() ? false : true);
    }, [selectedId]);

    const handleAddTextPage = () => {
        setNoteAdd(true);
    };

    const handleDelete = () => {
        setVeri(deleteData(selectedId, veri));
        setAddOrDeleteIcon(true);
    };

    function deleteData(selectId, data) {
        let array = [];
        let isThere;
        for (let i = 0; i < data.length; i++) {
            isThere = false;
            for (let j = 0; j < selectId.length; j++) {
                if (data[i].id === selectId[j]) {
                    isThere = true;
                    break;
                }
            }
            if (!isThere) {
                array[array.length] = data[i];
            }
        }
        return array;
    }

    function selectedCount() {
        return selectedId.length;
    }

    function allCount() {
        return data.length;
    }

    function selectAll() {
        if (allSelectMode) {
            setSelectedId(data.map((e) => e.id));
        } else {
            setSelectedId([]);
        }
    }

    return (
        <View style={style}>
            <View style={styles.navigateContent}>
                <View>
                    {addOrDeleteIcon ? (
                        <Text style={noteAdd || noteEdit != null ? styles.naviBrandWithNoteAdd : styles.naviBrand}>
                            {BRAND_NAME}
                        </Text>
                    ) : (
                        <TouchableOpacity style={styles.allSelectButton} onPress={() => selectAll()}>
                            <Text style={styles.allSelectModeText}>
                                {allSelectMode ? SELECT_ALL : DROP_ALL} ({selectedCount()}/{allCount()})
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                {noteAdd || noteEdit != null ? null : (
                    <TouchableOpacity
                        onPress={() => (addOrDeleteIcon ? handleAddTextPage() : handleDelete())}
                        style={styles.naviButton}
                    >
                        <Image
                            style={styles.image}
                            source={addOrDeleteIcon ? require(addButtonIcon) : require(deleteIcon)}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Navi;
