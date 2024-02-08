import 'react-native-gesture-handler';
import * as React from 'react';
import Rules from '../pages/Rules';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Index from '../pages/Library/Index';
import Home from '../pages/Dashobard/Home';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
// import Search from '../pages/Search';
// import Profiles from '../pages/profiles/Profiles';
// import Uploader from '../pages/Upload/Uploader';

import Icon from 'react-native-vector-icons/Entypo';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import Person from 'react-native-vector-icons/Ionicons';
// import UploadRules from '../pages/Upload/UploadRules';
import Library from '../pages/Library/Index';
import UploadRules from '../pages/Upload/UploadRules';
import Search from '../pages/Search';
// search

const Tab = createMaterialBottomTabNavigator();

export default function BottomScreenPage() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      barStyle={{backgroundColor: '#F2F2F2'}}>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                size={24}
                // style={{tintColor: }}
                color={focused ? '#302675' : '#686B6F'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="library"
        component={Library}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/lib.png')}
              style={{
                tintColor: focused ? '#302675' : '#686B6F',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UploadRules"
        component={UploadRules}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialIcons
                name="file-upload"
                size={34}
                color={focused ? '#302675' : '#686B6F'}
              />
            </View>
          ),
        }}
      />
         <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Fontisto
                name="search"
                size={20}
                color={focused ? '#302675' : '#686B6F'}
              />
            </View>
          ),
        }}
      />

      {/*

   
      <Tab.Screen
        name="Profile"
        component={Profiles}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, focused}) => (
            <View>
              <Person
                name="person"
                size={30}
                color={focused ? '#302675' : '#686B6F'}
              />
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 22,
    tintColor: '#686B6F',
  },
});
