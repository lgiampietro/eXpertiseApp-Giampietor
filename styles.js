import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
  screen: {
    padding: 30,
    flex: 1,
  },
  addItemInputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    marginLeft: 10,
    marginRight:10,
    marginTop:8,
    padding: 5,
    borderRadius: 5,    
    backgroundColor:"#f0ffff",    
  },  
  item: {
    marginTop:5,    
    textAlign: "left",    
  },
  badge:{    
    color:'white',    
    width:60,
    height:12,
    fontSize:9,
    textAlign:'center',       
    marginBottom:5,     
  },
  badgePending:{        
    backgroundColor:'#ffd700',          
  },
  
  badgeCompleted:{        
    backgroundColor:'#2e8b57',          
  },

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
    fontSize: 20,
    fontFamily:'Rufina-Bold',
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontFamily:'Rufina-Bold',
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
    backgroundColor: "#a9a9a9",
  },
  buttonDelete: {
    backgroundColor: "#ff6347",
  },  
  buttonCompleted:{
    backgroundColor:'#2e8b57'
  },
  textButton: {
    color:"white"
  },
});

export default styles;