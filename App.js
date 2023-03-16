import React from 'react'; 
import {useFonts, Rufina_400Regular,Rufina_700Bold} from '@expo-google-fonts/rufina';
import * as SplashScreen from 'expo-splash-screen';
import QueuesNavigator from './navigation/QueuesNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Rufina_400Regular,
    Rufina_700Bold
  });

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <QueuesNavigator />
  );
}