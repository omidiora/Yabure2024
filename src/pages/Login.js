import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import SocialButton from '../component/SocialButton';
import FormInput from '../component/FormInput';
import FormButton from '../component/FormButton';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {loginAction} from '../Redux/action/account';
import Orientation from 'react-native-orientation-locker';
import FormPassword from '../component/FormPassword';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import ViewContainer from '../component/ViewContainer';
import Header from '../component/Header';
import {COLOR} from '../utils/utils';
import {FTfamily, TextSizes} from '../utils/TextUtil';
import {useFormik} from 'formik';
import {useLoginMutation} from '../Redux/action/auth/api';
import { useNavigation } from '@react-navigation/native';

const LoginIn = () => {
  const [login, {isLoading ,error}] = useLoginMutation();
  const navigation=useNavigation()
  const {values, errors, handleSubmit, handleChange, setFieldValue, touched} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },

      // validationSchema: MobileWalletTransferScheme(),
      onSubmit: values => {
        onLogin();
      },
    });

  const onLogin = () => {
// alert(1)
   try {
    login(values)
    .unwrap()
    .then(response => {
      console.log(response ,'response from login');
      navigation.navigate("Home")
    })
    .catch(err => {
      console.log(err, 'error from login');
    });
    
   } catch (error) {
    console.log(error,'drror from catch')
   }
  };

console.log(values,isLoading ,error,'values')

  return (
    <View style={style.container}>
      <Header title={'SIGN IN'} />
      <ViewContainer>
        <Text style={style.sigin}>Sign in to your acccount</Text>
        <Text style={style.welcome}>
          Hi, Welcome back, kindly fill in your details to sign into your
          account!
        </Text>
        <View style={style.formInput}>
          <FormInput
            placeholderText={'Email'}
            label={'Email'}
            onChangeText={handleChange('email')}
          />
          <FormPassword
            placeholderText={'Password'}
            label={'Password'}
            onChangeText={handleChange('password')}
          />
         <View style={style.btn}>
         <FormButton buttonTitle="Login" onSubmit={() => handleSubmit()}  
         loading={isLoading}/>
         </View>
        </View>
        <View style={style.forgot}>
          <Text style={style.password}>Forgot password?</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity >
              <Text style={style.up}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ViewContainer>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  sigin: {
    color: COLOR.mainColor,
    fontFamily: 'Inter-Bold',
    fontSize: TextSizes.xl,
  },
  welcome: {
    color: COLOR.grey,
    fontFamily: 'Inter-Bold',
    fontSize: TextSizes.md + 3,
    marginVertical: 4,
  },
  formInput: {
    marginTop: HP(7),
    width: WP(85),
  },
  forgot: {
    alignSelf: 'center',
    paddingTop: HP(3),
  },
  password: {
    color: COLOR.mainColor,
    textAlign: 'center',
  },
  up: {
    color: COLOR.mainColor,
    // fontWeight:"bold",
    fontFamily: FTfamily.bold,
  },
  btn:{
    marginTop:20
  }
});
export default LoginIn;
