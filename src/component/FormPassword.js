import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { COLOR } from '../utils/utils';
import { FTfamily } from '../utils/TextUtil';

const FormPassword = ({
  labelValue,
  placeholderText,
  iconType,
  error,
  showIcon,
  ...rest
}) => {
  const [showPass, setshowPass] = React.useState(false);
  const _toggleIcon = () => {
    if (showPass) {
      setshowPass(false);
    } else {
      setshowPass(true);
    }
  };

  return (
    <View style={styles.inputContainer}>
    <View style={{flexDirection:"column", width:"97%",height:HP(10)}}>
    <Text style={styles.label}></Text>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={200}
        secureTextEntry={showPass ? false : true}
        placeholder={placeholderText}
        placeholderTextColor="#555555"
        {...rest}
      />
    </View>
      <View style={{right: WP(5),marginTop:HP(2.4)}}>
        {showPass ? (
          <Icon
             onPress={() => _toggleIcon()}
            name="eye-outline"
            // color={COLOR.headerBlack}
            // size={WP(6)}
          />
        ) : (
          <Icon
             onPress={() => _toggleIcon()}
            name="eye-off-outline"
            // color={COLOR.headerBlack}
            size={WP(4)}
          />
        )}
      </View>
      <View style={{position: 'absolute', top: 42, left: 1}}>
        <View>{error}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // marginTop: 5,
    marginBottom: 10,
    width: WP(87),
    height: windowHeight / 15,
    borderColor: '#707070',
    borderRadius: 3,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 14,
    marginTop:HP(-2),
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 10,
    // backgroundColor:'#ffffff',
    borderColor: '#555555',
    borderWidth: 1,
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 12.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  label: {
    color: COLOR.black,
    fontFamily: FTfamily.medium,
    fontSize: WP(4.0),

    paddingBottom: 4,
  },
});

export default FormPassword;
