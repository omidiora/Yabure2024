import React, {useRef, useState, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StatusBar,
  Platform,
  TextInput,
} from 'react-native';
import {MOBILE_WIDTH} from '../metric';
// import {navigationProps} from '../navigation/types/NavigationTypes';
import {Modalize} from 'react-native-modalize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLOR, HP, ONBOARD_DATA, WP} from '../utils/utils';
import {FTfamily} from '../utils/TextUtil';

// EvilIcons
// import { _gotoAuthStack } from '../../navigation/NavigationService';

// import {COLOR, HP, ONBOARD_DATA, WP} from '../../utils/utils';

// import AppBar from '../component/AppBar';
// import preferences from '../utils/preferences';

AntDesign.loadFont();
EvilIcons.loadFont();

const Onboarding: React.FC = props => {
  const {navigation} = props;
  const [show, setShow] = useState<boolean>(false);


  const [showWhichScreen, setshowWhichScreen] = useState('Default');

  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  let position = Animated.divide(scrollX, MOBILE_WIDTH + 10 * 2);
  const [scrolloffset, setscrolloffset] = useState(0);

  const [orientation, setOrientation] = React.useState('portrait');

  const [bottom, setBottom] = useState(1);
  const _onShowModal = () => {
    setShow(true);
  };

  return (
    <View style={Styles._mainContainer}>
      <Animated.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={true}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToInterval={WP('100%')}
        ref={flatListRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        style={{flexGrow: 0}}
        contentContainerStyle={Styles._scrollContainer}
        data={ONBOARD_DATA}
        keyExtractor={(item, index) => 'Onboarding-item' + index.toString()}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * WP('100%'),
            index * WP('100%'),
            (index + 1) * WP('100%'),
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [WP('100%'), 0, -WP('100%')],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <View style={[Styles._itemContainer]}>
          
              <View style={Styles.TitleContainer}>
              
                <View style={Styles._subjectContainer}>
                  <Animated.Image
                    source={item.bg_image}
                    style={Styles._image}
                  />
                </View>
                <View style={{marginTop:340}}>
                <Animated.Text
                  style={[Styles._title, {transform: [{translateX}]}]}>
                  {item.title}
                </Animated.Text>
                <Animated.Text
                  style={[Styles._subTitle, {transform: [{translateX}]}]}>
                  {item.subTitle}
                </Animated.Text>

                </View>
                <Animated.Image
                  source={item.dot}
                  style={[Styles._dot, {transform: [{translateX}]}]}
                />

              

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AuthNavigation', {
                      screen: 'Login',
                    })
                  }
                  style={[Styles._nextBtn, {top: HP(90)}]}>
                  <Text style={Styles._nextText}>{item.btn2}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Onboarding;


const Styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    // primaryBlue
  },
  afrikobo: {
    alignSelf: 'center',
    position: 'absolute',
    top: HP(160),
    resizeMode: 'cover',
  },
  header: {
    paddingTop: 10,
  },
  signIn: {
    textAlign: 'center',
    fontSize: WP(5),
    fontFamily: FTfamily.bold,
    color:COLOR.black
  },
  preferLogin: {
    textAlign: 'center',
    fontSize: WP(3.5),
    fontFamily: FTfamily.light,
    marginVertical: 10,
    color:COLOR.black
  },
  _skipBtn: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    zIndex: 1,
  },
  _skipText: {
    // fontFamily: FONT,
    fontSize: WP(12),
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    color: 'black',
  },
  dont: {
    flexDirection: 'row',
    width: '60%',
    color: 'black',
    justifyContent: 'space-around',
    position: 'absolute',
    alignSelf: 'center',
    top:Platform.OS=='ios'? HP(80): HP(90),
  },

  password: {
    alignItems: 'flex-end',
    marginVertical: 70,
  },
  _scrollContainer: {},
  _itemContainer: {
    width: WP('100%'),
    height: HP('100%'),
    // padding: WP(4),
    // justifyContent: 'center',
  },
  _image: {
    position: 'absolute',
    width: WP('70%'),
    height: HP('50%'),
    resizeMode: 'contain',
    alignSelf: 'center',
    top: WP(30),
  },
  TitleContainer: {
    position: 'absolute',
    padding: WP(4),
    marginTop: HP(-7),
    width: WP('100%'),
    alignItems: 'center',
  },
  _title: {
    // fontFamily: FONT,
    fontSize: WP(5.5),
    textAlign: 'center',
    color: 'black',
    top: HP(20),

    position: 'relative',
    fontFamily: 'Poppins-Bold',

    // fontFamily: 'Montserrat-Bold',
  },
  _subTitle: {
    // fontFamily: FONT,
    fontSize: 13,
    textAlign: 'center',
    top: HP(20.5),
    position: 'relative',
    color: COLOR.googleBtn,
    width: WP(80),
    fontFamily: 'Poppins-Medium',
  },
  _subjectContainer: {},
  _subject: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    top: HP(48),
    // fontWeight: "bold",
    position: 'relative',
    lineHeight: 20,
    // fontFamily: 'Montserrat-Medium',
    fontWeight: '300',
  },
  inner_image: {
    bottom: WP('10%'),
    resizeMode: 'contain',

    alignSelf: 'center',
    height: HP('25%'),
    width: '30%',
  },
  _bullet: {
    // fontFamily: FONT,
    fontSize: WP(12),
    // color: COLORS.lightGrey,
    marginTop: HP(12),
  },
  _dotsView: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: HP(53),
  },
  _dot: {
    top: Platform.OS == 'android' ? HP(75) : HP(70),
    position: 'absolute',
    tintColor:COLOR.mainColor
  },
  _nextBtn: {
    position: 'absolute',
    top: HP(80),
    //  right: 12,
    zIndex: 1,
    backgroundColor: COLOR.mainColor,
    padding: WP('4%'),
    paddingHorizontal: WP('9.5%'),

    borderWidth: 0.4,
    borderColor: 'white',
    alignSelf: 'center',
    width: '90%',
    borderRadius: HP(1),
  },
  _nextText: {
    fontSize: WP('3'),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalizeContiner: {
    width: '100%',
    height: 700,
    left: 20,
    top: 30,
  },
  modalizeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  getStarted: {
    fontSize: 21,
    fontWeight: '800',
    fontFamily: 'Poppins-Bold',
  },
  preLogin: {
    top: 10,
    marginVertical: 12,
    fontSize: 15,
    color: COLOR.grey4,
    fontFamily: 'Poppins-Medium',
  },
  LineContainer: {
    flexDirection: 'row',
    top: 130,
    right: 20,
    width: '90%',
    alignSelf: 'center',
  },
  rightLine: {
    backgroundColor: COLOR.grey5,
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  leftLine: {
    backgroundColor: COLOR.grey5,
    height: 2,
    flex: 1,
    alignSelf: 'center',
  },
  btnGoogle: {
    top: HP(20),
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.googleBtn,
    padding: '4.5%',
  },
  googleText: {
    color: COLOR.lightDark,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  icon: {
    right: 40,
  },
  btnFacebook: {
    top: HP(30),
    backgroundColor: COLOR.primaryBlue,
    borderWidth: 1,
    borderColor: COLOR.googleBtn,
    padding: '4.5%',
  },
  facebookText: {
    color: COLOR.white,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  SignUpContainer: {
    flexDirection: 'row',
    top: HP(48),
    alignSelf: 'center',
  },
  btnS: {
    top:Platform.OS=='ios'? HP(65.5): HP(75),
    paddingLeft: 10,
    position: 'absolute',
    alignSelf: 'center',
    width: '107%',
    left: 10,
  },

  signup: {
    color: COLOR.mainColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 30,
    top: 340,
    right: 20,
  },
  btn: {
    bottom: 30,
  },
  signHeaderText: {
    fontFamily: 'Poppins-Medium',
    top: 20,
  },
  login: {
    top: HP(2),
  },
  btnSignIn: {
    top: 30,
  },
  forgot: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    top: HP(20),
  },
  loginContainer: {
    width: '100%',
    height: HP(70),
    left: 20,
    top: 30,
  },
  forgotText: {
    color: COLOR.mainColor,
    fontFamily: 'Poppins-Medium',
  },
  resetText: {
    maxWidth: '90%',
    top: 30,
    color: COLOR.grey4,
  },
  forgotContainer: {
    width: '100%',
    height: HP(45),
    left: 20,
    top: 30,
  },
  sendLink: {bottom: 50},
  // signup: {
  //   color: COLOR.mainColor,
  //   fontFamily: FTfamily.medium,
  // },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    height: 55,
    borderRadius: 10,
    width: '80%',
  },
  email: {
    width: 120,
    height: 55,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginLeft: 1,
  },
  emailText: {
    textAlign: 'center',
    top: 15,
    color: COLOR.black,
    fontFamily: FTfamily.regular,
  },
  dontText:{
    color: COLOR.black,

  }
});


