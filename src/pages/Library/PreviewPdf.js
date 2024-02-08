import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Pdf from 'react-native-pdf';
import * as Progress from 'react-native-progress';
import SimilarNote from './SimilarNote';
import {Rating, AirbnbRating} from 'react-native-ratings';
import * as RootNavigation from '../../Navigations/RootNavigation';
import {Get_Reading_Book, Post_Reading_Book} from '../../Redux/action/Libarary';
import {useSelector, useDispatch} from 'react-redux';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {Capitalize} from '../../utils/Captilze';
import Header from '../../component/Header';

const PreviewPdf = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = React.useState(null);
  const [numPages, setNumPages] = React.useState(0);
  const [bookRead, setBookRead] = React.useState([]);
  const [rating, setRating] = React.useState(props.route.params?.params?.rating?.total || 0);

  const source = {
    uri: props.route.params?.params?.book,
    cache: true,
  };


  React.useEffect(() => {}, []);

  const getData = async () => {
    try {
      const bookReads = JSON.parse(
        await AsyncStorage.getItem('pagePercentDetails'),
      );
      setBookRead(...bookRead, bookReads);
      return bookReads != null ? JSON.parse(bookReads) : null;
    } catch (e) {
      console.log(e);
    }
  };


  React.useEffect(() => {
    // getData();
  }, [ props.route.params?.params, source]);

  const AddToReading = id => {
    // dispatch(Post_Reading_Book(id));
  };

  React.useEffect(() => {
    // dispatch(Get_Reading_Book());
  }, [dispatch]);


  console.log(props.route.params?.params?.book,'kadnkandknkafd')
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.subContainer}>
          <Pdf
            source={source}
            fitPolicy={1}
            trustAllCerts={false}
            // singlePage={true}
            onLoadComplete={(numberOfPages, filePath) => {
              // setTotalPage(numberOfPages);
            }}
            onPageChanged={(page, numberOfPages) => {
              setTotalPage(numberOfPages);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link presse: ${uri}`);
            }}
            style={styles.pdf}
          />
          <View style={styles.bookContainer}>
            <View>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  AddToReading(props.route.params?.params?.id);
                  RootNavigation.navigate('Explanations', {
                    params: props.route.params?.params,
                  });
                }}>
                <View>
                  <Image
                    source={require('../../assets/images/read.png')}
                    style={{
                      width: 20,
                      height: 25,
                      resizeMode: 'contain',
                      bottom: 3,
                      // padding: 60,
                      // tintColor: 'green',
                      // padding: 10,

                      // flex: 1,
                    }}
                  />
                </View>

                <Text
                  style={[
                    styles.primary,
                    {
                      fontSize: 13,
                      fontWeight: 'bold',
                      marginLeft: 5,
                      fontFamily: 'Inter-Medium',
                    },
                  ]}>
                  Read ({totalPage}pages)
                </Text>
              </TouchableOpacity>

              <View style={styles.subContainer}>
                <TouchableOpacity style={{marginTop: 40}}>
                  <Text style={styles.fontstyle}>
                    Rating : {rating == 0 ? 'no rating' : null}
                  </Text>
                </TouchableOpacity>

                <View style={{top: 46}}>
                  <Text>
                    <Rating
                      max={5}
                      ratingCount={rating}
                      imageSize={12}
                      onRate={setRating}
                    />
                  </Text>
                </View>
              </View>
              <View style={styles.subContainer}>
                <View>
                  {/* <Text style={styles.fontstyle}>
                    COMPLETION : {books?.PageRead == 1 ? 0 : books?.PageRead}%
                  </Text> */}
                </View>
                <View></View>
              </View>
              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.fontstyle}>UPLOAD DATE :</Text>
                </View>
                <View>
                  <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
                    {new Date(props.route.params?.params?.createdAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={{marginRight: WP(10), top: WP(10)}}>
              <Text
                style={{
                  fontFamily: 'Inter-Medium',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                {Capitalize(props.route.params?.params?.bookName)}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.uploader}>
                <Text>Uploader :</Text>
              </View>
              <View style={styles.uploader}>
                <Text style={{color: '#302675'}}>
                  @{props.route.params?.params?.user?.profile?.username}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 50,
            }}>
            <View style={{marginLeft: 10}}>
              <Text>Suggested Note</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('AllSimilarNote')}>
                <Text style={{color: '#302675', marginRight: 20}}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <SimilarNote /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default PreviewPdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  pdf: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 7,
    left: 10,
    backgroundColor: 'white',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop:HP(3)
  },
  username: {
    left: 45,
    top: 30,
  },
  uploader: {
    top: 40,
  },
  bookContainer: {
    // position: 'absolute',
    marginTop: 200,
    right: 70,
  },
  fontstyle: {
    fontFamily: 'Inter-Light',
    // fontWeight: 'bold',
  },
  primary: {
    color: '#302675',
  },
  section: {
    marginLeft: WP(-25),
  },
});
