import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FollowingUser, POPULAR_UPLOADER} from '../../Redux/action/Dashboard';
import {Follow, UnFollow} from '../../Redux/action/account';
// Follow
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import * as RootNavigation from '../../Navigations/RootNavigation';
import Orientation from 'react-native-orientation-locker';
import { COLOR } from '../../utils/utils';
import Header from '../../component/Header';

const Item = ({item, onPress, backgroundColor, textColor}) => {
  const dispatch = useDispatch();
  const listOfFollower = useSelector(
    state => state.profile?.data?.user?.followers?.followers,
  );

  const profile = {};
  
  console.log(profile, 'profile');


  const [follow, setFollow] = useState('Follow');



  const getIndividualProfile = id => {
    // dispatch(GetSingleProfile(id));
    // return RootNavigation.navigate('IndividualProfile', {
    //   IndividualProfile: id,
    // });
  };

  return (
    <View onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={styles.container}>
        <View style={{right: WP(5)}}>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.icon}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => getIndividualProfile(item?.id)}>
            <Text style={styles.title}>@Bisii123456</Text>
          </TouchableOpacity>
          <Text style={[styles.notes, textColor]}>
            {' '}
            {item?.profile?.notes} notes uploaded
          </Text>
        </View>
        <View style={{left: WP(5)}}>
          <TouchableOpacity onPress={() => FollowUser(item?.id)}>
            <Text style={{color: '#302675'}}>+{follow}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ); 
};

const AllPopularUploader = () => {
  const topUploader =[];

  // };

  console.log(topUploader);

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#E8FBFA' : '#E8FBFA';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
  <View style={styles.view}>
    <Header title="Uploaders"/>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={[1,2,3,4]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={false}
      />
    </SafeAreaView>
  </View>
  );
};

export default AllPopularUploader;

const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:COLOR.white},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 27,
    marginVertical: 18,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: '#302675',
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
  },
  notes: {
    fontSize: 10,
  },
});
