import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
        screen:{
          padding:30,
        },
        inputContainer: {
          marginTop:30,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'space-between',   
        },
        input:{
          width:200,    
          borderBottomColor:'black',
          borderBottomWidth:1,
        },
        item:{
          padding:10,
          textAlign:'center',
        },
        itemContainer:{
          marginTop:30,
          flex:1,
        },
        contentList: {
          padding: 5,
          borderRadius: 5,
          backgroundColor: "#ccc",
        },
        modalContainer: {    
          width: "90%",
          marginTop: "50%",    
          alignSelf:'center',
          backgroundColor: 'white',
        },
        modalTitle: {
          padding: 10,
          borderRadius: 5,
        },
        modalContent: {
          padding: 10,
          width:'50%',
        },
        modalActions: {
          flexDirection:'row',
          justifyContent:'space-around',  
        }      
});

export default styles;