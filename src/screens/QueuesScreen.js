import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const QueuesScreen = ({ route, navigation }) => {

    const { queue } = route.params

    useEffect(() => {
        navigation.setOptions({
          title: queue.name
        })
      },[])

    return (
        <View style={styles.screen}>
        <Text>Id:{" "}{bread.price}</Text>
        <Text style={styles.title}>Cola de trabajo: {" "} {queue.name}</Text>        
        <Text>Estoad:{" "}{queue.status}</Text>
    
      </View>
    )
};

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