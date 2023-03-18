import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmptyQueues from '../../screens/EmptyQueues';
import WorkQueues from '../../screens/WorkQueues';
import QueuesScreen from '../../screens/QueuesScreen';

const Stack = createNativeStackNavigator();

const QueuesNavigator = () => {
    return (
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
    )
}

export default QueuesNavigator;