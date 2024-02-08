import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from '../pages/OnboardingPage';
import {createStackNavigator} from '@react-navigation/stack';
import SiginIn from '../pages/Login';
import Register from '../pages/Register';
import VerifyEmail from '../pages/VerifyEmail';
import Rules from '../pages/Rules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThankYou from '../pages/ThankYou';
import editProfiles from '../pages/profiles/editProfiles';

import Otp from '../pages/Otp';
import {useSelector} from 'react-redux';
import {navigationRef} from './RootNavigation';
import ResetPassword from '../pages/ResetPassword';
import Bottom from './BottomNavigation';
import Welcome from '../pages/Dashobard/Welcome';
import Interest from '../pages/interests/Interest';
import AllNotes from '../pages/Dashobard/AllNotes';
import LibraryHome from '../pages/Library/Index';
import Index from '../pages/Subscription/Index';
import Subscription from '../pages/Subscription/Subscription';
import {Icon} from '@ui-kitten/components';
import AllPopularUploader from '../pages/Dashobard/AllPopularUploader';
import Profiles from '../pages/profiles/Profiles';
import AllSuggestedNote from '../pages/Dashobard/AllSuggestedNote';
import PreviewPdf from '../pages/Library/PreviewPdf';
import IndividualProfile from '../pages/profiles/IndividualProfile';
import Header from '../component/Header';
import Explanations from '../pages/Comments/Explanations';
import Search from '../pages/Search';
import resetPassword from '../pages/profiles/resetPassword';
import About from '../pages/About';
import AllSimilarNote from '../pages/Library/AllSimilarNote';
import Payment from '../pages/Subscription/Payment';
import ForgotPassword from '../pages/Library/ForgotPassword';
import ForgotPassword2 from '../pages/Library/ForgotPassword2';
import Successfull from '../pages/Subscription/Successfull';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;


  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{
        headerStyle: {elevation: 0},
        cardStyle: {backgroundColor: '#ffffff'},
      }}>
      {/*PreviewPdf  */}
      <Stack.Screen
        name="PreviewPdf"
        component={PreviewPdf}
        options={({route}) => ({title: route.params?.singleBook?.bookName})}
      />

      <Stack.Screen
        name="AllPopularUploader"
        component={AllPopularUploader}
        options={{headerShown: true, title: 'Popular Uploaders'}}
      />
      <Stack.Screen
        name="Explanations"
        component={Explanations}
        options={({route}) => ({title: route.params?.singleBook?.bookName})}
      />
      {/* IndividualProfile */}
      <Stack.Screen
        name="IndividualProfile"
        component={IndividualProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: true, title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="ForgotPassword2"
        component={ForgotPassword2}
        options={{headerShown: true, title: 'Reset Password'}}
      />
      {/* ForgotPassword */}

      <Stack.Screen
        name="AllSuggestedNote"
        component={AllSuggestedNote}
        options={{headerShown: true, title: 'Suggested Uploaders'}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubscriptionIndexPage"
        component={Index}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Uploader"
        component={Uploader}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SubscriptionPage"
        component={Subscription}
        options={{
          title: 'Subscriptions',

          headerTitleStyle: {
            fontWeight: 'normal',
            left: 40,
          },
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllSimilarNote"
        component={AllSimilarNote}
        options={{title: 'All Similar  Notes', headerShown: true}}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllNotes"
        component={AllNotes}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BottomScreenPage"
        component={Bottom}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signin"
        component={SiginIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profiles"
        component={Profiles}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="payment"
        component={Payment}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="successfullPayment"
        component={Successfull}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="editProfiles"
        component={editProfiles}
        options={{headerShown: false}}
      />
      {/* resetPassword */}

      {/* <Stack.Screen
        name="interest"
        component={Interest}
        options={{headerShown: false}}
      />

      <Stack.Screen name="otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen name="About" component={About} />

      <Stack.Screen
        name="ResetPassword"
        options={{title: 'Change Password'}}
        component={ResetPassword}
      />

      <Stack.Screen
        name="ThankYou"
        component={ThankYou}
        options={{headerShown: false}}
      /> */}

      {/* 
      
    

      <Stack.Screen name="otp" component={Otp} options={{headerShown: false}} />

      <Stack.Screen
        name="ThankYou"
        component={ThankYou}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />


      

<Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />

    


<Stack.Screen
        name="verifyEmail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Uploader"
        component={Uploader}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

// (...)



const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
