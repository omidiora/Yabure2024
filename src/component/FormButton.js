import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';
import ArrowRight from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../utils/utils';

const FormButton = ({
  buttonTitle,
  disabled,
  Icon,
  onSubmit,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      // disabled={disabled}
      disabled={loading}
      style={styles.buttonContainer}
      onPress={onSubmit}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={COLOR.white}  size={'large'}/>
      ) : (
        <Text style={styles.buttonText}>
          {buttonTitle} {''} {Icon}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    // left: 10,
    height: windowHeight / 14,
    backgroundColor: '#302675',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
  },
  arrowRight: {
    color: '#FFFFFF',
    fontWeight: 'normal',
    fontSize: 13,
    fontWeight: '100',
    bottom: 10,
  },
});

export default FormButton;
