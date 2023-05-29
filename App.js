import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabScreen from './screens/BottomTabScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Button title='you are in home'/>,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              // color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Bottom Tab" component={MyTabs} options={{ headerShown: false }}/>
      <Stack.Screen name="Top Tab" component={MyTopTabs} options={{ headerShown: true }}/>
    </Stack.Navigator>
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



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bottom tab" component={BottomTabScreen} />
    </Tab.Navigator>
  );
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabScreen from './screens/TopTabScreen';
import ProductScreen from './screens/ProductScreen';

const topTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <topTab.Navigator>
      <topTab.Screen name="Home" component={HomeScreen} />
      <topTab.Screen name="Settings" component={TopTabScreen} />
    </topTab.Navigator>
  );
}