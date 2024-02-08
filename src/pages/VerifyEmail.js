import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../component/FormButton';
import FormCustomButton from '../component/FormCustomButton';
import {windowHeight, windowWidth} from '../utils/Dimension';

const VerifyEmail = () => {
  return (
    <View>
      <Text style={styles.text}>Verify Your Email Address</Text>
      <View>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', opacity: 0.5, left: 56}}>
            Please verify your email. Confirm your email address. Read about
            this email at Yabure.com
          </Text>
        </View>
        <View style={{padding: 10}}>
          <FormButton buttonTitle="Verify" />
          <FormCustomButton
            buttonTitle="Not Now"
            bgColor={'white'}
            textColor="#000000"
          />
        </View>
      </View>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 90,
    padding: 30,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#302675',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
