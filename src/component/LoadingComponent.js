import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const LoadingComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator animating={true} color={'#BEBAB3'} size="large" />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({});
