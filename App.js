import {View,Text,TextInput,FlatList,Pressable,Button} from 'react-native';
import 'expo-dev-client';
import React,{useEffect, useState} from 'react'; 
import styles from './styles';
import {Modal,NewItem,ListItem} from './src/components';

export default function App() {

  const [itemText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);  
  const [selectedTask, setSelectedTask] = useState(null);
  
  const onChangeText = (text) => {
    setTaskText(text);
  };

  // Cada vez que hay un cambio en las variables, crea log en la terminal
  // useEffect(()=> {
  //   console.log("useEffect","Item Text:",itemText,", Items:",tasks)
  // },[itemText,tasks])

  const onAddTask = () => {    
    setTasks((oldArry)=>[...oldArry,{id:Date.now(),value:itemText,status:'Pendiente'}]);     
    setTaskText("");
  };

  const onSelectTask = (item) => {
    setSelectedTask(item);
    setModalVisible(true);
  };
  
  const onCompletedTask = (id) =>{        
    tasks.find(item => {return item.id === id;}).status = "Completada";
    onCloseModal();
  };
  
  const onDeleteTask = (id) => {        
    setTasks(tasks.filter(item => {return item.id != id;}));
    onCloseModal();    
  };

  const onCloseModal = () => {
    setModalVisible(!modalVisible);
    setSelectedTask(null);
  };

  return (
    <View style={styles.screen}>
      <NewItem
        onChangeText={onChangeText}
        onPress={onAddTask}
        placeholder="Nombre de la tarea"
        itemText={itemText}
      />  

     <ListItem 
        items={tasks}
        onPressItem={onSelectTask}
     />

      <Modal
        modalVisible={modalVisible}        
        selectedItem = {selectedTask}
        onCancelModal = {onCloseModal}
        onDeleteModal = {onDeleteTask}
        onConfirmModal = {onCompletedTask}   
      />

    </View>
  );
}
