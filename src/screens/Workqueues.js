import React from 'react';
import {View,StyleSheet, Text} from 'react-native';
import { subTitleStyle } from '../constants/TextStyles';
import ListItem from './../components/ItemList/ListItem';
import Colors from '../constants/Colors';

const WorkQueues = ({
    queues,
    onPressQueues
}) => {
    return (
        <View>
           
            <View style={styles.container}>
                <Text style={styles.subtitle}>Listado de colas de trabajo</Text>       
                <ListItem 
                    items={queues}
                    onPressItem={onPressQueues}
                />
            </View>
        </View>
    )
};

export default WorkQueues;

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.screen,        
        padding: 10,                  
    },
    subtitle:{
        ...subTitleStyle
    }
})