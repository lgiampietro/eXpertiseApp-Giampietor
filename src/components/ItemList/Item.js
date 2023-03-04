import {Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors'
const Item = ({
    itemData,
    onPress
}) => {
    return (
        <Pressable 
            style={styles.itemContainer}
            onPress={()=>{                            
                onPress(itemData.item);
            }}
        >
            <Text style={styles.item}>{itemData.item.value}</Text>
            {
                itemData.item.status === "Pendiente" ? <Text style={[styles.badge, styles.badgePending]}>{itemData.item.status}</Text> : 
                <Text style={[styles.badge, styles.badgeCompleted]}>{itemData.item.status}</Text>
            }              
        </Pressable>            
    );
};

export default Item;

const styles = StyleSheet.create({
    itemContainer: {
        marginLeft: 10,
        marginRight:10,
        marginTop:8,
        padding: 5,
        borderRadius: 5,    
        backgroundColor:Colors.backgroundItem,    
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
        backgroundColor:Colors.badgePending,          
      },
      
      badgeCompleted:{        
        backgroundColor:Colors.badgeCompleted,          
      },
})