import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmptyQueues from './../screens/Emptyqueues';
import WorkQueues from './../screens/Workqueues';
import QueuesScreen from './../screens/QueuesScreen';

const Stack = createNativeStackNavigator();

const QueuesNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name ="Home" 
                    component={EmptyQueues}
                    options={{
                        title:"eXpertise"
                    }}
                />
                <Stack.Screen
                    name="List"
                    component={WorkQueues}
                    options={{
                        title:"List"
                    }}
                />
                <Stack.Screen 
                    name ="Queue" 
                    component={QueuesScreen}
                    options={({ route }) => ({ title: route.params.queuesName })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default QueuesNavigator