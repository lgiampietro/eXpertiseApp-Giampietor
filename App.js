import {StyleSheet,View,Text,TextInput,FlatList,Pressable,Modal,Button} from 'react-native';
import 'expo-dev-client';
import React,{useState} from 'react'; 
import styles from './styles';

export default function App() {

  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    setItems((oldArry)=>[...oldArry,{id:Date.now(),value:itemText}]);     
    setItemText("");
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const removeItem = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry)=> oldArry.filter((item)=> item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput placeholder='Item de lista' style={styles.input} onChangeText={onChangeText} value={itemText} />
        <Button title='Agregar' onPress={addItem}/>        
      </View>
     <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable style={styles.contentList} onPress={()=>{
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item)=> item.id.toString()}
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
            <View styles={styles.modalTitle}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                padding:10
              }}>Eliminar Item</Text>
            </View>
            <View styles={styles.modalContent}>
              <Text>Eliminar item {selectedItem?.value}?</Text>
            </View>
            <View styles={styles.modalActions}>
                <Button title="Cancelar" onPress={()=>{
                  setModalVisible(false)
                  setSelectedItem(null);
                }}/>

                <Button title="Eliminar" onPress={()=>{
                  removeItem(selectedItem.id)
                }}/>

                <Button title='Test'></Button>
            </View>
        </View>
      </Modal>
    </View>
  );
}
