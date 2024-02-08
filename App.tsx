import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Onboarding from './src/pages/OnboardingPage';
import LoginIn from './src/pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import Register from './src/pages/Register';
import Home from './src/pages/Dashobard/Home';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import Library from './src/pages/Library/Index';
import BottomScreenPage from './src/Navigations/BottomNavigation';
import PopularUploader from './src/pages/Dashobard/PopularUploader';
import MainNavigation from './src/Navigations/MainNavigation';

function App() {
  const Stack = createStackNavigator();
  return (
   <Provider store={store}>
     <NavigationContainer>
      <MainNavigation/>
      
    </NavigationContainer>
   </Provider>
  );
}

export default App;
