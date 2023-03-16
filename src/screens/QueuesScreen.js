import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const QueuesScreen = ({ route, navigation }) => {  

    useEffect(() => {
        navigation.setOptions({
           title: route.params.name
        })
      },[])

    return (
        <View style={styles.screen}>
        <Text>Id:{" "}{route.params.id}</Text>
        <Text style={styles.title}>Cola de trabajo: {" "} {route.params.name}</Text>        
        <Text>Estoad:{" "}{route.params.status}</Text>
    
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