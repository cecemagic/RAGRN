import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import AnimatableTest from './src/screens/AnimatableTest'
import RentAGuyScreen from './src/screens/RentAGuyScreen'
import BeADateScreen from './src/screens/BeADateScreen'
import HomeScreen from './src/screens/HomeScreen'


const HomeStack = createStackNavigator()

function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
     <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
      <HomeStack.Screen name="RentAGuyScreen" component={RentAGuyScreen} />
      <HomeStack.Screen name="BeADateScreen" component={BeADateScreen} />

    </HomeStack.Navigator>
  );
}


function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App