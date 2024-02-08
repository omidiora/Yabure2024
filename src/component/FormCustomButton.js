import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';

const FormButtonCustom = ({
  buttonTitle,
  bgColor,
  textColor,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <Text style={[styles.buttonText, {color: textColor}]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    // backgroundColor:'yellow',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default FormButtonCustom;
