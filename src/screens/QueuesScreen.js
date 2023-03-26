import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const QueuesScreen = ({ route, navigation }) => {  
    const queue = useSelector(state=>state.queuesList.selected)


    return (
        <View style={styles.screen}>
        <Text>Id:{" "}{queue.id}</Text>
        <Text style={styles.title}>Cola de trabajo: {" "} {queue.name}</Text>   
      </View>
    )
}

export default QueuesScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'Rufina_700Bold',
    }
})