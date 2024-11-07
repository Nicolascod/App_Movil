import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import MenuScreen from './screens/MenuScreen';
import BurgerSelectionScreen from './screens/BurgerSelectionScreen';
import OrderScreen from './screens/OrderScreen';
import LomitoSelectionScreen from './screens/LomitoSelectionScreen';
import MilanesaSelectionScreen from './screens/MilanesasSelectionScreen';
import EmpanadaSelectionScreen from './screens/EmpanadaSelectionScreen';
import PizzaSelectionScreen from './screens/PizzaSelectionScreen';
import BebidasSelectionScreen from './screens/BebidasSelectionScreen';
import PedidoScreen from './screens/PedidoScreen';
export default function App() {
  
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="BurgerSelection" component={BurgerSelectionScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="LomitoSelection" component={LomitoSelectionScreen} />
        <Stack.Screen name="MilanesasSelection" component={MilanesaSelectionScreen} />
        <Stack.Screen name="EmpanadaSelection" component={EmpanadaSelectionScreen} />
        <Stack.Screen name="PizzaSelection" component={PizzaSelectionScreen} />
        <Stack.Screen name="BebidasSelection" component={BebidasSelectionScreen} />
        <Stack.Screen name="PedidoSelection" component={PedidoScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});