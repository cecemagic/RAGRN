import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RentAGuyScreen from '../screens/RentAGuyScreen';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HomeScreen/>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

export default function DrawerNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="RentAGuy" component={RentAGuyScreen} />
          <Stack.Screen name="BeADate" component={BeADateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }