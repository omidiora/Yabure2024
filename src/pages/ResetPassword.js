import React from 'react';
import {View, StyleSheet} from 'react-native';
import FormButtonCustom from '../component/FormCustomButton';
import FormInput from '../component/FormInput';
import Header from '../component/Header';

const ResetPassword = () => {
  return (
    <View>
      <View>
        
      </View>
      <View style={styles.container}>
        <FormInput
          secureTextEntry={true}
          placeholder="Enter Current Password"
        />
        <FormInput secureTextEntry={true} placeholder="New Password" />
        <FormInput secureTextEntry={true} placeholder="Re-Enter New Password" />
        <FormButtonCustom
          bgColor="#302675"
          textColor="white"
          buttonTitle="Change Password"
        />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 21,
    padding: 0,
  },
});
