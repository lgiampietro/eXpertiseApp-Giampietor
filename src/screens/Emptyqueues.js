import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import ButtonCustom from './../components/ButtonCustom';



const EmptyQueues = ({
    onPressLoadQueues
}) => {
    return (
        <View>
           
            <View style={styles.container}>
             <Image 
                style={styles.image}
                source={require('../img/bed.png')}
             />   
             <ButtonCustom 
                title='Cargar colas de trabajo'
                onPress={onPressLoadQueues}
             />    

            </View>
        </View>
    )
};

export default EmptyQueues;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',        
        padding: 10,                          
    },
    image:{        
        height:300, 
        width:300,
        marginBottom:20,
        resizeMode:'stretch',
        alignSelf:'center'
    }
})