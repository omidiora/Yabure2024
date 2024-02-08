import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import FormInput from '../../component/FormInput';
import Validator from 'validatorjs';
import FormButton from '../../component/FormButton';
import {useDispatch} from 'react-redux';
// import {windowHeight, windowWidth} from '../utils/Dimension';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {forgetPassword} from '../../Redux/action/account';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [value, setValues] = useState({
    email: '',
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
      email: 'required|email',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      // dispatch(forgetPassword(value.email));
      // dispatch(loginAction(value));
    }
  };

  console.log(errors, 'error');
  console.log(value, 'values');

  return (
    <View>
      <View
        style={{
          borderBottomColor: 'rgba(112, 108, 97, 0.4)',
          borderBottomWidth: 1,
        }}
      />
      <View style={{paddingTop: WP(30)}}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
        <View style={{padding: 10}}>
          <FormInput
            placeholderText="Enter your email"
            onChangeText={value => handleInputChange('email', value)}
            error={<Text style={styles.error}>{errors.email}</Text>}
          />
          <View
            style={{
              width: WP(70),
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <FormButton
              buttonTitle={'Reset Password'}
              onSubmit={onSubmit}
            />
          </View>

          {/* <FormButton buttonTitle="Verify" />
          <FormCustomButton
            buttonTitle="Not Now"
            bgColor={'white'}
            textColor="#000000"
          /> */}
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    // textAlign: 'center',
    fontWeight: '400',
    marginTop: 90,
    padding: 30,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    // height: windowHeight / 15,
    backgroundColor: '#302675',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  error: {
    color: 'red',
  },
});
