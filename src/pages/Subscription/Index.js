import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../../component/FormButton';
import FormButtonCustom from '../../component/FormCustomButton';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

const Index = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          ENJOY UNLIMITED READING ANYWHERE YOU GO{' '}
        </Text>
      </View>

      <View style={styles.text1Container}>
        <Text style={styles.text1}>
          Enjoy thousands of digital notes, past questions and voice notes for
          just N2,000/month. Downloaf to your device & enjoy reading offline.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* <View>
          <FormButton buttonTitle="Subscribe" style={styles.button} />
        </View> */}
        <View>
          <FormButton
            style={styles.button}
            onPress={() => navigation.navigate('SubscriptionPage')}
            buttonTitle="View All Plans"
          />
        </View>
        {/* <View>
          <FormButtonCustom
            style={styles.button1}
            buttonTitle="Start 7 days Free Trial"
            onPress={() => navigation.navigate('BottomScreenPage')}
          />
        </View> */}
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: '20%',
  },
  text1Container: {
    top: WP(20),
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    top: WP(10),
  },
  text1: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    top: 100,
  },
  button: {
    marginTop: 10,
    width: windowWidth / 1.3,
    height: windowHeight / 20,
    backgroundColor: '#302675',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  button1: {
    marginTop: 10,
    height: windowHeight / 19,
    width: windowWidth / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
