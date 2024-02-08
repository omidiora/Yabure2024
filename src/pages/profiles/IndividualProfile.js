import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import Pdf from 'react-native-pdf';
import * as RootNavigation from '../../Navigations/RootNavigation';
import {GetSingleNotes} from '../../Redux/action/Dashboard';
import {Follow} from '../../Redux/action/account';
import LoadingComponent from '../../component/LoadingComponent';

const Item = ({item = {}}) => {
  const source = {
    uri: item?.book,
    cache: true,
  };

  const dispatch = useDispatch();

  const PreviewNotes = async id => {
    // await dispatch(GetSingleNotes(id));
    // const PagesRead = JSON.parse(
    //   await AsyncStorage.getItem('PagePercentageRead'),
    // );
    // SetPercentageRead(PagesRead);

    return RootNavigation.navigate('PreviewPdf', {
      itemId: id,
      singleBook: item,
    });
  };

  return (
    <>
      <Text style={[styles.title]}>{item.title}</Text>
      <View style={{marginTop: 40}}>
        <TouchableOpacity
          onPress={id => PreviewNotes(item.id)}
          style={styles.item}
          key={Math.random().toString()}>
          <Pdf
            singlePage={true}
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              // setNumberPages(numberOfPages);
            }}
            onPageChanged={(page, numberOfPages) => {}}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link presse: ${uri}`);
            }}
            style={styles.pdf}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const IndividualProfile = props => {
  const {navigation} = props;
  const [selectedId, setSelectedId] = useState(null);
  const profile = useSelector(state => state.SingleProfile.data || []);
  const loading = useSelector(state => state.SingleProfile.loading || []);

  const userProfile = useSelector(state => state.profile.data || {});

  const data = profile?.user?.books;

  const dispatch = useDispatch();
  const getProfile = props.route.params.IndividualProfile;
  // IndividualProfile

  useEffect(() => {
    // dispatch(GetSingleProfile(getProfile));
    // dispatch(Getprofiles());
  }, [dispatch,]);

  const image =
    profile?.picture == null
      ? require('../../assets/images/user.png')
      : {uri: profile.picture};

  const renderItem = props => {
    const {item} = props;

    return <Item item={item} />;
  };


  const follow=(id)=>{
    
  }



  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
        <View>
          {userProfile?.id == profile?.id ? null : (
            <TouchableOpacity onPress={() => follow(profile?.id)}>
              <Text style={{color: '#302675'}}> + Follow</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text
          style={{
            top: 50,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333333',
            fontFamily: 'Inter',
          }}>
          @{profile.username}
        </Text>
        <Text
          style={{
            top: 50,
            textAlign: 'center',
            fontSize: 12,
            color: ' rgba(85, 81, 69, 0.7)',
          }}>
          {profile.notes} NOTES UPLOADED
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          top: WP(30),
        }}>
        <View style={{right: WP(30)}}>
          <Text style={styles.notes}>Notes Uploaded</Text>
        </View>
        {/* <View style={{left: 30}}>
          <TouchableOpacity>
            <Text style={{color: '#302675'}}>See All</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={data}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // padding: 10,
    marginVertical: 32,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
  },
  pdf: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    top: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    top: '30%',
  },
  notes: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default IndividualProfile;
