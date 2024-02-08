import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Pdf from 'react-native-pdf';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {instance} from '../../../authToken';
import FormButtonCustom from '../../component/FormCustomButton';
import * as RootNavigation from '../../Navigations/RootNavigation';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { COLOR } from '../../utils/utils';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.field}</Text>
  </TouchableOpacity>
);

const Uploader = props => {
  const {navigation} = props;
  const [selectedId, setSelectedId] = useState(null);
  const interestData = [];
  const [interestField, setInterestField] = React.useState([]);
  const [disabled, setDisabled] = useState(true);
  const [valueInterest, setInterest] = React.useState([]);
  const [pdf, setPdf] = useState([]);
  const [pdfobject, setdfOne] = useState({});
  const [pdfId, setPdfId] = useState({});
  const [category, setCategory] = useState({});
  const [loading, setLoading] = React.useState(false);

  const loginStatus = useSelector(state => state.login);

  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(interest());
  }, [dispatch, ]);

  let interestArrayField = () => {
    return interestData.map(data => {
      return data.field;
    });
  };

  const [text, setText] = useState('');

  const PdfState = () => {
    return pdf.map(data => {
      const source = {
        uri: data?.uri,
        book: data?.uri,
        bookName: data?.name,
        cache: true,
      };
      // setText(source);

      return (
        <View>
          <Pdf
            singlePage={true}
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              // setNumberPages(numberOfPages);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(page);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link presse: ${uri}`);
            }}
            key={1}
            style={styles.pdf}
          />
          <View style={{bottom: 120}}>
            <Text style={styles.pdfText}>{data?.name}</Text>
            {/* <TextInput value={text} defaultValue={data?.name} /> */}
          </View>
        </View>
      );
    });
  };

  const FilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res, 'ressss');
      setPdf(res);
      setdfOne(...res);
    } catch (err) {
      console.log(err);
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const filepdf = () => {
    setLoading(true);
    let data = new FormData();
    data.append('book', pdfobject);
    data.append('bookName', pdfobject?.name);
    data.append('categoryId', interestData[0].id);

    fetch('https://api.yabureapp.com/v1/books/upload', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(value => {
            setLoading(false);
            Alert.alert(value.message);
          });
        }

        if (response.status == 413) {
          setLoading(false);
          Alert.alert('The file size should be less than 1mb');
        }
        if (response.status === 200) {
          Alert.alert('Book Uploaded Successfully');
          setPdf([]);
          setLoading(false);
          // dispatch(NewLibraryBook());
          setTimeout(() => {
            return RootNavigation.navigate('BottomScreenPage', {
              screen: 'library',
            });
          }, 2000);
        }
      })
      .catch(err => {
        console.log(err, 'eeeeeeeeeeee');
        setLoading(false);
        Alert.alert(err.response.data);
      });
  };

  React.useEffect(() => {
    const CategoryId = field => {
      return interestData
        .filter(data => data?.field == field)
        .map(value => {
          setCategory(value?.id);
        });
    };
  }, [interestData, pdfId]);

  const cancel = () => {
    setPdf([]);
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#302675' : '#808080';
    const color = item.id === selectedId ? 'white' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  console.log(category, 'categorycategorycategorycategory');
  return (
    <ScrollView style={styles.container}>
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
            marginTop: WP(1),
          }}>
          <Icon name="chevron-back" size={WP(6)} color={'#686B6F;'} />
        </TouchableOpacity>
        <View style={styles.rulesHeaderContainer}>
          <Text style={styles.rulesText}>Uploader</Text>
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
        {pdf.length == 0 ? (
          <View style={styles.upload}>
            <Text style={styles.text1}>No Uploads Yet</Text>
            <Text style={styles.text2}>
              Upload notes and make money doing so{' '}
            </Text>
          </View>
        ) : null}
      </View>
      <View>
        <View style={{textAlign: 'center', marginTop: 160}}></View>
        {/* <Text style={{textAlign: 'center', marginTop: 160, color: 'red'}}>
          Select a Category before clicking on the upload button
        </Text> */}
        <View
          style={{
            alignItem: 'center',
            justifyContent: 'center',
            marginLeft: 100,
          }}>
          {/* <SelectDropdown
            buttonStyle={{
              borderColor: '#302675',
              borderWidth: 1,
              marginTop: 50,
              marginLeft: -10,
            }}
            data={interestArrayField()}
            onSelect={(selectedItem, index) => {
              setPdfId(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          /> */}
        </View>
      </View>
      {pdf.length == 0 ? (
        <>
          <View style={styles.imageContainer}>
            <View style={styles.pdfstate}>{PdfState()}</View>
            <View style={{marginTop: -41}}>
              <Image source={require('../../assets/images/camera.png')} />
            </View>
            <View style={styles.buttonContainer2}>
              <FormButtonCustom
                onPress={() => FilePicker()}
                buttonTitle="Upload Pdf"
                bgColor="#302675"
                textColor="#FFFFFF"
              />
            </View>
          </View>
        </>
      ) : (
        <View style={{paddingBottom: 10, marginTop: WP(-31)}}>
          <View style={styles.pdfstate}>{PdfState()}</View>
          <View style={styles.buttonContainer3}>
            {/* loading */}
            {loading ? (
              <ActivityIndicator
                animating={true}
                size="small"
                color="#0000ff"
              />
            ) : (
              <FormButtonCustom
                onPress={() => filepdf()}
                buttonTitle="Upload Pdf"
                bgColor="#302675"
                textColor="#FFFFFF"
              />
            )}
          </View>

          {loading ? null : (
            <View style={styles.buttonContainer3}>
              <FormButtonCustom
                onPress={() => cancel()}
                buttonTitle="Cancel"
                bgColor="white"
                textColor="black"
              />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  pdf: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    left: 10,
    bottom: 90,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 70,
    width: 120,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // right: 270,
  },
  buttonContainer1: {
    // position: 'absolute',
    // width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    top: 1,
    padding: 40,
    marginTop: -340,
    width: '100%',
  },

  buttonContainer2: {
    // position: 'absolute',
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonContainer3: {
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
  },
  image: {
    width: '21%',
    height: '40%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 60,
  },
  text1: {
    position: 'absolute',
    width: 155,
    height: 25,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 25,
    color: '#333333',
    opacity: 0.5,
  },
  upload: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    fontSize: 570,
    marginVertical: WP(20),
  },
  text2: {
    position: 'absolute',
    width: WP(285),
    height: HP(25),
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: HP(2),
    color: '#333333',
    opacity: 0.5,
    top: WP(12),
    textAlign: 'center',
  },
  pdfstate: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  rulesHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: WP(14),
    top: WP(-3),
  },
  rulesText: {
    fontSize: WP(5),
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'Inter-SemiBold',
  },
  pdfText: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Uploader;
