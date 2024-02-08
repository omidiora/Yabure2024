import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginIn from '../pages/Login';
import Register from '../pages/Register';
import BottomScreenPage from './BottomNavigation';
import Library from '../pages/Library/Index';
import AuthNavigation from './AuthNavigation';
import AllPopularUploader from '../pages/Dashobard/AllPopularUploader';
import AllSuggestedNote from '../pages/Dashobard/AllSuggestedNote';
import Uploader from '../pages/Upload/Uploader';
import PreviewPdf from '../pages/Library/PreviewPdf';
import Explanations from '../pages/Comments/Explanations';
import Onboarding from '../pages/OnboardingPage';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="auth" component={Onboarding} />
      <Stack.Screen name="Home" component={BottomScreenPage} />
      <Stack.Screen name="AllPopularUploader" component={ AllPopularUploader}/>
      <Stack.Screen name="AllSuggestedNote" component={AllSuggestedNote}/>
      <Stack.Screen name="Uploader" component={Uploader}/>
      <Stack.Screen name="PreviewPdf" component={PreviewPdf}/>
      <Stack.Screen name="Explanation" component={Explanations}/>

    </Stack.Navigator>

  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
