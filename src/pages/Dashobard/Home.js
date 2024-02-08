import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import search from '../../assets/images/search.png';
import bell from '../../assets/images/bell.png';
// import SuggestedNotes from './SuggestedNotes';
// import AccountHoC from '../../hoc/AccountHoC';
// import PopularUploader from './PopularUploader';
// import Search from '../Search';
import Orientation from 'react-native-orientation-locker';
import {useSelector, useDispatch} from 'react-redux';
import {COLOR} from '../../utils/utils';
import SuggestedNotes from './SuggestedNotes';
import PopularUploader from './PopularUploader';
import {FTfamily} from '../../utils/TextUtil';
// import {Getprofiles} from '../../Redux/action/profile';

const NewHome = props => {
  // const dispatch = useDispatch();
  const {profile = 'a', navigation} = props;
  // console.log(profile, 'profzzzzzzzz');
  const followers = 1;

  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(false);

  // React.useEffect(() => {
  //   dispatch(Getprofiles());
  // }, [dispatch]);

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          top: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}>
        <Text>
          Welcome
          <Text
            style={{
              color: '#302675',
              fontWeight: '800',
              fontFamily: 'Inter-Medium',
            }}>
            {profile?.username}
          </Text>
        </Text>
        <View>
          <Image source={bell} style={{width: 20, height: 20}} />
        </View>
      </View>

     
      <View style={{marginTop: HP(10)}}>
        <View style={styles.rowIng}>
          <Text style={styles.uploader}>Suggested Notes</Text>
          <TouchableOpacity
             onPress={() => navigation.navigate('AllSuggestedNote')}>
            <Text style={styles.uploaderSee}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: -10}}>
        <SuggestedNotes />
        </View>
      </View>

      <View style={{marginTop: HP(10)}}>
        <View style={styles.rowIng}>
          <Text style={styles.uploader}>Popular Uploader</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllPopularUploader')}>
            <Text style={styles.uploaderSee}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: -10}}>
          <PopularUploader />
        </View>
      </View>

      <View style={styles.noteContainer}>
        {/*  onPress={() => navigation.navigate('Uploader')} */}
        <View>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: '#302675', padding: 3}}>
              Click to Upload notes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 12, color: '#555145', padding: 3}}>
              Upload your notes and earn some money doing so
            </Text>
          </View>

          <View>
            <Image
              source={require('../../assets/images/upload.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    //  justifyContent:'center',
    alignContent: 'center',
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: HP(12),
  },
  noteContainer: {
    bottom: WP(13),
    backgroundColor: '#E8FBFA',
    padding: 20,
    width: WP(90),
    borderRadius: WP(3),
    marginTop: HP(20),
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    tintColor: '#302675',
    left: 10,
  },
  suggestedText: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Inter-Medium',
    color: COLOR.black,
  },
  popularUploaderText: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Inter-Medium',
  },
  uploaderSee: {
    color: COLOR.mainColor,
    fontFamily: FTfamily.regular,
  },
  rowIng: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
