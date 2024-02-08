import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen-hooks';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export const WP = widthPercentageToDP;
export const HP = heightPercentageToDP;
export const LOC = listenOrientationChange;
export const ROC = removeOrientationListener;
//  removeOrientationListener as rol

export const ONBOARD_DATA = [
  {
    // intro_backgroundimage: IMAGE.back,
    intro_image: require('../assets/images/OpenDoodles.png'),
    title: 'Your Books organizer',
    subTitle: 'Arrange all your notes into one easy to read offline media ',
    btn1: 'Explore',
    btn2: 'Get started',

    bg_image: require('../assets/images/OpenDoodles.png'),
    dot: require('../assets/images/dot1.png'),
  },
  {
    title: 'Control your studying',
    subTitle:
      'Choose when you study and choose the books you need to study anytime you want..',
    btn1: 'Explore',
    btn2: 'Get started',
    intro_image: require('../assets/images/OpenDoodles1.png'),
    bg_image: require('../assets/images/OpenDoodles1.png'),
    dot: require('../assets/images/dot2.png'),
  },
  {
    intro_image: require('../assets/images/OpenDoodles2.png'),

    title: 'Limitless Access To Books',
    subTitle:
      'Enjoy access to 1000+ notes and 3000+ topics at your fingertips.',
    btn1: 'Explore',
    btn2: 'Get started',
    bg_image: require('../assets/images/OpenDoodles2.png'),
    dot: require('../assets/images/dot3.png'),
  },
  // {
  //   title: 'Save as You Buy',
  //   subTitle:
  //     'Buy more, save more. Get products at the most affordable prices on Afrikobo.',
  //   btn: 'Get started',
  //   intro_image: require('../assets/images/OpenDoodles.png'),
  //   bg_image: require('../assets/images/OpenDoodles.png'),
  //   dot: require('../assets/images/dot4.png'),
  // },
];



export const COLOR = {
  deepblue: 'blue',
  primaryBlue: '#3B5998',
  lightBlue: '#A6CEE3',
  lightMain: '#FFEBED',
  semiPurple: '#C0CAF1',
  grey2: '#3A3A3C',
  grey3: '#8C8C8C',
  grey4: '#565656',
  grey5: '#D6D6D6',
  googleBtn: '#929292',
  mainColor: '#302675',
  white: '#FFFFFF',
  black: '#000000',
  lightDark: '#3A3A3C',
  pink: '#9A1725',
  borderColor: '#DFDFDF',
  rgba: 'rgba(154, 23, 37, 0.05)',
  rgba2: 'rgba(154, 23, 37, 0.1)',
  lightGrey: '#FAFAFA',
  lightPink: '#F8F8F8',
  green: '#009B3A',
  lightgreen: '#28B411',
  lightgreen2: ' #E6FFE2',
  orange: '#F8931D',
  purple: '#7B61FF',
  lightGrey2: '#D3D2D2',
  semiBlue: '#1096AA',
  cardColor: '#F1F1F1',
  fog: '#D2D1D7',
  lighterBlue: '#F4FAF8',

  // primaryBlue
};



export const CURRENCY_SYSMBOL = {
  NAIRA: '\u20A6',
};
