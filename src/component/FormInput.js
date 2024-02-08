import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {COLOR} from '../utils/utils';
import {FTfamily} from '../utils/TextUtil';

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  error,
  showIcon,
  label,

  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          height: HP(10),
          marginVertical: WP(40),
        }}>
        <Text style={styles.label}></Text>
        <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={200}
          placeholder={placeholderText}
          placeholderTextColor="#555555"
          multiline={true}
          {...rest}
        />
      </View>

      <View style={{position: 'absolute', top: 42, left: 1}}>
        <View>{error}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#707070',
    borderRadius: 3,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: HP(10),
    paddingTop: 2,
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
    borderWidth: 0.7,
    width: '100%',
    height: '70',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  label: {
    color: COLOR.black,
    fontFamily: FTfamily.medium,
    fontSize: WP(4.0),
    marginLeft: -4,
    paddingBottom: 4,
  },
});

export default FormInput;
