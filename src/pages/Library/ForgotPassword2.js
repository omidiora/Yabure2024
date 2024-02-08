import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FormInput from '../../component/FormInput';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import FormButton from '../../component/FormButton';
import {useDispatch} from 'react-redux';
import Validator from 'validatorjs';

import en from 'validatorjs/src/lang/en';
import {forgetPassword2} from '../../Redux/action/account';

Validator.setMessages('en', en);

const ForgotPassword2 = () => {
  const dispatch = useDispatch();
  const [value, setValues] = useState({
    password: '',
    key: '',
  });

  const [errors, setError] = useState({});

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    let rules = {
      password: 'required',
      key: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.password': 'The Password field is required.',
      'required.key': 'The Key field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      // dispatch(forgetPassword2(value));
    }
  };

  return (
    <View>
      <View style={{top: WP(40)}}>
        <Text style={{textAlign: 'center', color: '#302675'}}>
          Check Your email for your key
        </Text>
      </View>
      <View style={styles.semicontainer}>
        <View>
          <FormInput
            placeholder="Key"
            onChangeText={value => handleInputChange('key', value)}
            error={<Text style={styles.error}>{errors.key}</Text>}
          />
        </View>
        <View style={{top: WP(2)}}>
          <FormInput
            placeholder="Your New Password"
            onChangeText={value => handleInputChange('password', value)}
            error={<Text style={styles.error}>{errors.password}</Text>}
          />
        </View>
      </View>
      <View style={styles.formbuttonContainer}>
        <FormButton buttonTitle={'Reset Password'} onPress={() => onSubmit()} />
      </View>
    </View>
  );
};

export default ForgotPassword2;

const styles = StyleSheet.create({
  semicontainer: {
    width: WP(85),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: WP(40),
  },
  formbuttonContainer: {
    width: WP(40),
    top: HP(23),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
