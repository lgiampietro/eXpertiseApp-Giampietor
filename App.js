import React from 'react'; 
import {useFonts, Rufina_400Regular,Rufina_700Bold} from '@expo-google-fonts/rufina';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigators/tab/MainNavigator';

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
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    
  );
}