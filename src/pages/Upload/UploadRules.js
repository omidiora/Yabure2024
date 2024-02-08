import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import FormButton from '../../component/FormButton';
import FormButtonCustom from '../../component/FormCustomButton';
import { COLOR } from '../../utils/utils';

const rules = [
  {
    rules: 'Check the file size: the max file size is 500kb per upload',
  },
  {
    rules: 'Permissions You would need to apply to start uploading files',
  },
  {
    rules:
      'Apply to be uploader :A uploader  get paid to upload files on a weekly basis the server and get paid. To apply please send a message to Yaburenotes@gmail.com',
  },
];

const UploadRules = props => {
  const {navigation} = props;
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: 'white',
            paddingBottom: WP(8),
            left: WP(-23),
            marginTop: WP(5),
          }}>
          <Icon name="chevron-back" size={WP(6)} color={'#000000'} />
        </TouchableOpacity>

        <View style={styles.rulesHeaderContainer}>
          <Text style={styles.rulesText}>Rules</Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: 'rgba(112, 108, 97, 0.3)',
          borderBottomWidth: 1,
          top: WP(-6),
        }}
      />

      <View>
        {rules.map((data, index) => {
          return (
            <View key={index} style={{width: WP(92)}}>
              <View style={styles.rulesArrayContainer}>
                <View style={styles.indexContainer}>
                  <Text>{index}</Text>
                </View>
                <View style={styles.ruleContainer}>
                  <Text style={{fontFamily: 'Inter-Medium', color:COLOR.black}}>
                    {data.rules}{' '}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.formContainer}>
        <FormButtonCustom
          buttonTitle={'Next'}
          bgColor="#302675"
          textColor="white"
          onPress={() => navigation.navigate('Uploader')}
        />
      </View>
    </View>
  );
};

export default UploadRules;
//

const styles = StyleSheet.create({
  rulesHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: WP(14),
  },
  rulesText: {
    fontSize: WP(5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rulesArrayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: WP(12),
    left: WP(3),
  },
  indexContainer: {
    backgroundColor: '#E8FBFA',
    paddingBottom: WP(2),
    marginVertical: WP(3),
    padding: WP(4),
    borderRadius: WP(10),
  },
  ruleContainer: {
    left: WP(3),
    top: WP(3),
    flex: 1,
  },
  formContainer: {
    width: WP(23),
    top: WP(20),
    left: WP(70),
  },
});
