import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CompletedQueues from '../../screens/CompletedQueues'

const Stack = createNativeStackNavigator();

const CompletedNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{                        
            headerTitleStyle: {
              fontFamily: 'Rufina_700Bold'
            }
          }}
        >
            <Stack.Screen 
                name="Completed"
                component={CompletedQueues}
                options={{
                    title:'Completadas'
                }}
            />
        </Stack.Navigator>
    )
}

export default CompletedNavigator;