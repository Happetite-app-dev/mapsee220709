import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import EditScreen from './screens/EditScreen';
import PlaceInfoBottomSheetScreen from './screens/PlaceInfoBottomSheetScreen';
import { View } from 'react-native';
import { useState } from 'react';

const Stack= createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tabs'>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="PlaceInfoBottomSheetScreen" component={PlaceInfoBottomSheetScreen} options={{headerShown: false, presentation: 'containedTransparentModal',contentStyle:{backgroundColor:'transparent'}}} />
        <Stack.Screen name="EditScreen" component={EditScreen} options={{headerShown: false, presentation: 'containedModal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;