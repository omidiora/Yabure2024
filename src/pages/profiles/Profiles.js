import React ,{useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import OpenDoodles from '../OpenDoodles.png';
import FormButton from '../../component/FormButton';
import Header from '../../component/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useStylesheet} from 'react-native-responsive-ui';
import UserAvatar from 'react-native-user-avatar';
import {logout} from '../../Redux/action/account';

const Profiles = ({navigation}) => {
  const profile = useSelector(state => state.profile.data || {});
  console.log(profile, 'profile')
  const dispatch = useDispatch();
  const profileImage = (
    <UserAvatar size={100} bgColor="#302675" name={profile?.fullName} />
  );


  // const [firstName, setfirstName] = useState(profile?.fullName);
  // const [firstName, setfirstName] = useState(profile?.fullName)

  React.useEffect(() => {
    // dispatch(Getprofiles());
  }, [dispatch, ]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.username}>{profile?.username}</Text>
          <View>
            <Text>
              <Text style={styles.notes}>Notes </Text>
              <Text style={styles.subNotes}>{profile?.notes}</Text>
            </Text>
          </View>
          <View>
            <Text>
              <Text style={styles.notes}>Streams </Text>
              <Text style={styles.subNotes}>{profile?.streams}</Text>
            </Text>
          </View>
        </View>
        <View>{profileImage}</View>
      </View>
      <View style={styles.ButtonContainer}>
        <FormButton
          buttonTitle="Restart Membership"
          onPress={() => navigation.navigate('SubscriptionIndexPage')}
        />
      </View>

      <View>
        <View>
          <TouchableOpacity style={styles.viewContainer}>
            <View>
              {/* <Image style={styles.image} source={profileIcon} /> */}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('editProfiles')}>
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>

            <View>
              <Icon
                name="arrow-forward-ios"
                style={styles.icon3}
                size={15}
                color={'#686B6F'}
              />
            </View>
          </TouchableOpacity>
        </View> 
        <View style={styles.horizontalrule} />
      </View>

      <TouchableOpacity style={styles.viewContainer}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/key.png')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.text}>Reset Password</Text>
        </TouchableOpacity>

        <View>
          <Icon
            name="arrow-forward-ios"
            style={styles.icon3}
            size={15}
            color={'#686B6F'}
          />
        </View>
      </TouchableOpacity>

      {/* Horizontal rule */}
      <View style={styles.horizontalrule} />
      {/* <TouchableOpacity style={styles.viewContainer}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/send.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>Share App</Text>
        </View>

        <View>
          <Icon
            name="arrow-forward-ios"
            style={styles.icon3}
            size={15}
            color={'#686B6F'}
          />
        </View>
      </TouchableOpacity> */}
      <View style={styles.horizontalrule} />

      <TouchableOpacity
        style={styles.viewContainer}
        onPress={() => navigation.navigate('About')}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/images/about.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>About us</Text>
        </View>

        <View>
          <Icon
            name="arrow-forward-ios"
            style={styles.icon3}
            size={15}
            color={'#686B6F'}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.horizontalrule} />

      <View style={{top: 10}}>
        <FormButton onPress={()=>{}} buttonTitle="Sign Out" />
      </View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  ButtonContainer: {
    width: 190,
    right: 15,
    paddingBottom: 30,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  notes: {
    fontWeight: '100',
    lineHeight: 40,
    fontSize: 20,
  },
  subNotes: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
    tintColor: '#302675',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
  },

  horizontalrule: {
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 500,
    right: 200,
  },
});
