import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, HP} from '../utils/utils';

const ViewContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
    </View>
  );
};

export default ViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    // justifyContent:"center",
    // alignItems:'center',
    marginHorizontal:30,
    paddingTop:HP(7)
  },
});
