import {Pressable, Text, View, Modal as RNmodal, StyleSheet } from 'react-native';
import React from 'react';
import { subTitleStyle, textStyle, titleStyle } from '../constants/TextStyles';
import Colors from '../constants/Colors';

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,  
  onConfirmModal,
}) => {  
 
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
    <View style={styles.modalMainView}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Cola de trabajo </Text>
        <Text style={styles.modalText}>
          Desea inciar la cola de trabajo {" "}
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
            style={[styles.button,styles.buttonCompleted]}
            onPress={() => {
              onConfirmModal(selectedItem.id);
            }}
          >            
            <Text style={styles.textButton}>Iniciar</Text>
          </Pressable>
          
        </View>
      </View>
    </View>
  </RNmodal>  
  )
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    ...titleStyle
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    ...subTitleStyle
  },
  modalBoldText: {
    ...textStyle,
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    backgroundColor:Colors.buttonCancel,
  }, 
  buttonCompleted:{
    backgroundColor:Colors.buttonCompleted
  },
  textButton: {
    color:"white"
  },
})