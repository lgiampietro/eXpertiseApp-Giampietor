import {Pressable, Text, View, Modal as RNmodal } from 'react-native';
import React from 'react';
import styles from '../../styles';

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
  onConfirmModal,
}) => {  
 
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
    <View style={styles.modalMainView}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Tarea </Text>
        <Text style={styles.modalText}>
          Elimine o marque como completada la tarea {" "}
          <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
        </Text>
        <View style={styles.modalActions}>
          <Pressable 
            style={[styles.button,styles.buttonCancel]}
            onPress={()=>{onCancelModal()}}
          >
            <Text style={styles.textButton}>Cancelar</Text>
          </Pressable>      

          <Pressable 
            style={[styles.button,styles.buttonDelete]}
            onPress={()=>{onDeleteModal(selectedItem.id)}}
          >
            <Text style={styles.textButton}>Eliminar</Text>
          </Pressable>     

          <Pressable
            style={[styles.button,styles.buttonCompleted]}
            onPress={() => {
              onConfirmModal(selectedItem.id);
            }}
          >            
            <Text style={styles.textButton}>Completar</Text>
          </Pressable>
          
        </View>
      </View>
    </View>
  </RNmodal>  
  )
};

export default Modal;
