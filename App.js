import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Formulary from './screens/Formulary';
import Inicio from './screens/Inicio';
import Service from './screens/Service';
import Creadores from './screens/Infor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Chave de Roda'>
        <Stack.Screen name="Chave de Roda" component={Inicio} />
        <Stack.Screen name="Dev" component={Creadores}/>
        <Stack.Screen name="Serviços" component={Service}/>
        <Stack.Screen name="Formulary" component={Formulary}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}