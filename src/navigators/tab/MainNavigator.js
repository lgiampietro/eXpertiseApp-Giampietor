import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TabsNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator;