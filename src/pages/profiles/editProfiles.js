import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import FormButton from '../../component/FormButton';
import FormInput from '../../component/FormInput';
import Header from '../../component/Header';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {EditProfile, Getprofiles} from '../../Redux/action/profile';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';

const editProfiles = ({navigation: {goBack}}) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.data || {});
  Validator.setMessages('en', en);

  // console.log(profile, 'proffffffff');
  const [fullName, setFullName] = useState(profile?.fullName);
  const [userName, setUserName] = useState(profile?.username);
  const [phone, setPhone] = useState(profile?.phoneNumber);

  const [errors, setError] = useState({});
  // const [firstName, setfirstName] = useState(profile?.fullName);
  // const [firstName, setfirstName] = useState(profile?.fullName)

  // useEffect(() => {
  //   dispatch(Getprofiles());
  // }, [dispatch]);

  // const onSubmit = () => {
  //   dispatch(EditProfile({fullName, userName, phone}));
  //   // EditProfile
  // };

  const onSubmit = async () => {
    let rules = {
      fullName: 'required|min:6',
      userName: 'required|min:4',
      phone: 'required|min:7',
    };

    let validation = new Validator({fullName, userName, phone}, rules, {
      'required.fullName': 'The full name field is required.',
      'required.userName': 'The username field is required.',
      'required.phone': 'The phone Number field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      // dispatch(EditProfile({fullName, userName, phone}));ß
    }
  };
  console.log(errors);
  return (
    <ScrollView ScrollView>
      <Header title={'Edit Profiles'} onPress={() => goBack()} />
      <View style={styles.container}>
        <View>
          <Text style={styles.error}>{errors.fullName} </Text>
          <Text style={styles.error}>{errors.userName} </Text>
          <Text style={styles.error}>{errors.phone} </Text>
        </View>
        <View>
          <Text>Full Name</Text>
          <FormInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View>
          <Text>Username</Text>
          <FormInput
            placeholder="Username"
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        <View>
          <Text>Phone No.</Text>
          <FormInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}

            // setPhone
          />
        </View>

        {/* <View>
          <Text>Account Number</Text>
          <FormInput placeholder="Account Number"  />
        </View> */}

        {/* <View>
          <Text>Bank</Text>
          <FormInput placeholder="Bank" />
        </View>

        <View>
          <Text>Account Name</Text>
          <FormInput />
        </View>

        <View>
          <Text>BVN</Text>
          <FormInput placeholder="BVN No." />
        </View> */}
        <View style={{right: WP(3)}}>
          <FormButton buttonTitle="Update Profile" onPress={() => onSubmit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default editProfiles;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    left: 30,
    paddingBottom: 50,
    marginTop: WP(15),
  },
  text: {
    top: 3,
    fontWeight: '500',
    fontSize: 16,
  },
});
