import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Payment = props => {
  const {
    route: {params},
  } = props;

  console.log(params?.data?.checkout, ' params?.data?.checkout');
  return (
    <View style={styles.container}>
      <WebView source={{uri: params?.data?.checkout}} style={styles.video} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  video: {
    marginTop: 20,
    maxHeight: '100%',
    width: 400,
    flex: 1,
  },
});
