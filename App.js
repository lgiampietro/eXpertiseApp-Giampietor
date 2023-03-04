import {View} from 'react-native';
import 'expo-dev-client';
import React,{useEffect, useState} from 'react'; 
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import WorkQueue from './src/screens/Workqueues';
import EmptyQueues from './src/screens/Emptyqueues';
import Header from './src/components/Header';
import Modal from './src/components/Modal';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);  

  const [fontsLoaded] = useFonts({
    'Rufina-Regular':require('./assets/fonts/Rufina-Regular.ttf'),
    'Rufina-Bold':require('./assets/fonts/Rufina-Bold.ttf'),
  });


  const onLoadQueues = () =>{
    if(queues.length===0) 
    {
      setQueues((oldArry)=>[...oldArry,{id:1,value:'Cola de trabajo 1',status:'Pendiente'}]);       
      setQueues((oldArry)=>[...oldArry,{id:2,value:'Cola de trabajo 2',status:'Pendiente'}]);   
      setQueues((oldArry)=>[...oldArry,{id:3,value:'Cola de trabajo 3',status:'Pendiente'}]);   
      setQueues((oldArry)=>[...oldArry,{id:4,value:'Cola de trabajo 4',status:'Pendiente'}]);   
    }
  }
  // Cada vez que hay un cambio en las variables, crea log en la terminal
  useEffect(()=> {
    console.log(queues);
  },[queues])


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const onPressQueue = (item) => {
    setSelectedQueue(item);
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(!modalVisible);
    setSelectedQueue(null);
  };  

  const onBeginQueue = (id) => {
    setModalVisible(!modalVisible);
    queues.find(item => {return item.id === id;}).status = "Iniciada";
  };


  return (
    <View  onLayout={onLayoutRootView}>
      <Header title = 'Colas de Trabajo' />
      {
        queues.length>0 ? 
          <WorkQueue queues={queues} onPressQueues={onPressQueue} /> : 
          <EmptyQueues onPressLoadQueues={onLoadQueues} /> 
      }      

      <Modal
        modalVisible={modalVisible}        
        selectedItem = {selectedQueue}
        onCancelModal = {onCloseModal}        
        onConfirmModal = {onBeginQueue}   
      />
    </View>
  );
}
