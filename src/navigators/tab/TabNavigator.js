import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons'; 
import CompletedNavigator from "./CompletedNavigator";
import QueuesNavigator from "./QueuesNavigator";
import { COLORS } from "./../../constants/Colors";
const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
          }}
        >
            <BottomTabs.Screen name="Trabajo" component={QueuesNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <AntDesign name="bars" size={24} color={focused ? '#4169e1' : '#708090'} />
                        <Text style={{ color: focused ? '#4169e1' : '#708090' }}>Trabajo</Text>
                    </View>
                )
              }}
            />

            <BottomTabs.Screen name="Completada" component={CompletedNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <AntDesign name="check" size={24} color={focused ? '#4169e1' : '#708090'} />
                        <Text style={{ color: focused ? '#4169e1' : '#708090' }}>Completadas</Text>
                    </View>
                )
              }}
            />

        </BottomTabs.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.25,
      elevation: 5,
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 70
    },
    tabBarIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })