import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FormInput from '../component/FormInput';
import FormButton from '../component/FormButton';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RegisterAction} from '../Redux/action/account';
import Orientation from 'react-native-orientation-locker';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import FormPassword from '../component/FormPassword';
import Header from '../component/Header';
import ViewContainer from '../component/ViewContainer';
import {FTfamily} from '../utils/TextUtil';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Register = ({navigation}) => {
  let errors = '';

  
  const [loginDetail, setLoginDetail] = useState({
    firstName: '',
    password: '',
    device: 'mobile',
    remember_me: true,
  });

  const handleInputChange = (inputName, inputValue) => {
    setLoginDetail({
      ...loginDetail,
      [inputName]: inputValue,
    });
  };

  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Register'} />
      <ViewContainer>
        <View>{/* <Text style={{color: 'red'}}>{account.error}</Text> */}</View>

        <KeyboardAwareScrollView contentContainerStyle={{paddingTop: 30}}>
          <FormInput
            label={'First Name'}
            placeholderText="enter your first name"
            onChangeText={value => handleInputChange('firstName', value)}
            error={<Text style={style.error}>{errors?.firstName}</Text>}
          />
          <FormInput
            label={'Last Name'}
            placeholderText="enter your last name"
            onChangeText={value => handleInputChange('lastName', value)}
            error={<Text style={style.error}>{errors?.lastName}</Text>}
          />
          <FormInput
            label={'Email'}
            placeholderText="enter your  email"
            onChangeText={value => handleInputChange('email', value)}
            error={<Text style={style.error}>{errors?.email}</Text>}
          />
          <FormInput
            label={'Phone No.'}
            placeholderText="enter your phone No."
            onChangeText={value => handleInputChange('phoneNumber', value)}
            error={<Text style={style.error}>{errors?.phoneNumber}</Text>}
          />

          <FormPassword
            label={'Password'}
            placeholderText="enter your Password"
            onChangeText={value => handleInputChange('password', value)}
            error={<Text style={style.error}>{errors?.password}</Text>}
            showIcon
          />
        </KeyboardAwareScrollView>
        <FormButton
          buttonTitle={'Register'}
          disabled={false}
          onPres={() => {}}
        />
        <View style={[style.textView, {flexDirection: 'row'}]}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: '#6A6A6A',
              fontWeight: 'normal',
              fontSize: 15,
              marginTop: 9,
              fontFamily: FTfamily.regular,
            }}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            style={{marginTop: 10, marginLeft: 5}}>
            <Text style={{color: '#302675', fontFamily: 'notoserif'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ViewContainer>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 25,
    color: '#333333',
    fontWeight: 'bold',
    fontFamily: 'Inter-ExtraBold',
  },
  errMsg: {
    color: 'red',
    fontFamily: 'Inter-Regular',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    textAlign: 'center',
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 12,
    top: 5,
  },
});
export default Register;
