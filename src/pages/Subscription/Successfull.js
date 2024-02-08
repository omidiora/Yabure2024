import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import splash from '../../assets/images/splash.png';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import FormButton from '../../component/FormButton';


const Successfull = ({navigation}) => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={{top: WP(40)}}>
      <View>
        <Text style={styles.title}>Successfull Payment!</Text>
      </View>
      <View style={styles.image}>
        <Image source={splash} />
      </View>
      <View style={styles.button}>
        <FormButton
          onPress={() => navigation.navigate('BottomScreenPage')}
          buttonTitle="Go to Dashboard"
        />
      </View>
    </View>
  );
};

export default Successfull;

const styles = StyleSheet.create({
  title: {
    fontSize: WP(6),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    top: HP(3),
  },
  button: {
    justifyContent: 'center',
    top: WP(20),
    width: WP('80%'),
    alignItems: 'center',
    alignSelf: 'center',
    right: WP(2),
  },
});
