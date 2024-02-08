import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import FormButton from '../component/FormButton';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {VerifyToken, ResendOtp} from '../Redux/action/account';
import FormButtonCustom from '../component/FormCustomButton';
import FlashMessage from 'react-native-flash-message';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

const Otp = () => {
  const [code, setCode] = React.useState('');
  const [TokenCompleted, setTokenCompleted] = React.useState(false);
  const VerifyOtp = useSelector(state => state.VerifyOtp);

  const {msg} = VerifyOtp;

  const Resend_Otp = useSelector(state => state.RESEND_OTP);

  const dispatch = useDispatch();

  // const onSubmitOtp = () => {
  //   dispatch(VerifyToken(code));
  // };

  // const ResendToken = () => {
  //   dispatch(ResendOtp());
  // };

  // React.useEffect(() => {
  //   if (code.toString().length == 6) {
  //     setTokenCompleted(true);
  //   } else {
  //     setTokenCompleted(false);
  //   }
  // }, [code]);

  return (
    <View style={styles.container}>
      <FlashMessage />
      <View>
        <Text style={styles.input}>Enter Your Email Verification Code </Text>
      </View>
      <View style={{right: WP(4), justifyContent:'center', alignItems:'center'}}>
        <OTPInputView
          style={{width: '80%', height: WP(70)}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => setCode(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // onCodeFilled={() => completeToken()}
        />
      </View>

      <View>
        {TokenCompleted ? (
          <FormButton
            buttonTitle="Done"
            onPress={() => {
              onSubmitOtp();
              showMessage({
                message: '',
                description: msg,
                type: 'info',
              });
            }}
          />
        ) : (
          <FormButtonCustom
            buttonTitle="Done"
            disabled={true}
            bgColor="#aca8c7"
            textColor={'white'}
          />
        )}
      </View>

      <View style={{flexDirection: 'row', width: '100%', top: 13}}>
        <Text style={{fontSize: 13, color: 'rgba(112, 108, 97, 0.9)'}}>
          Did you receive the email verification code?{' '}
        </Text>
        <TouchableOpacity onPress={() => ResendToken()}>
          <Text style={{fontSize: 13, color: '#302675'}}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#302675',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    left: 36,
    top: 170,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    right: WP(3),
  },
});
