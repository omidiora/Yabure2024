import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Pdf from 'react-native-pdf';
import AccountHoC from '../../hoc/AccountHoC';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as RootNavigation from '../../Navigations/RootNavigation';
import * as Progress from 'react-native-progress';
import {Capitalize} from '../../utils/Captilze';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { useGetAllSuggestedNoteQuery } from '../../Redux/action/Dashboard/api';
import { COLOR } from '../../utils/utils';
import Header from '../../component/Header';

const Item = ({item, onPress, backgroundColor, textColor, profile}) => {
  const [numberOfPages, setNumberPages] = React.useState();
  const [PercentageRead, SetPercentageRead] = useState(1);
  const state = useSelector(state => state?.SingleNotes?.singleBook);

  const dispatch = useDispatch();

  const PreviewNotes = async id => {
    // await dispatch(GetSingleNotes(id));
    const PagesRead = JSON.parse(
      await AsyncStorage.getItem('PagePercentageRead'),
    );
    SetPercentageRead(PagesRead);

    return RootNavigation.navigate('PreviewPdf', {
      itemId: id,
      singleBook: state,
    });
  };
  const source = {
    uri: item?.book,
    cache: true,
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Pdf
            singlePage={true}
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              // setNumberPages(numberOfPages);
            }}
            onPageChanged={(page, numberOfPages) => {
              setNumberPages(page);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link presse: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
        <View style={styles.subBookname}>
          <Text style={styles.bookName}>{Capitalize(item?.bookName)}</Text>
          <Text style={{color: '#302675', fontWeight: 'bold'}}>
            @{item?.user.profile.username}
          </Text>
          <TouchableOpacity
            onPress={id => PreviewNotes(item.id)}
            style={{marginTop: 20}}>
            <Text
              style={{
                color: '#302675',
                fontFamily: 'Inter-Medium',
                fontWeight: 'bold',
              }}>
              Open Note
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const AllSuggestedNote = props => {
  const {profile} = props;
  const AllNotes = [];
  const dispatch = useDispatch();
const  {data, isLoading ,error}=useGetAllSuggestedNoteQuery()


  useEffect(() => {
    // dispatch(SuggestedNote());
  }, []);

  const renderItem = ({item}) => {
    const backgroundColor = item.selected ? '#302675' : 'yellow';
    const color = item.selected ? 'yellow' : 'black';

    return (
      <Item
        item={item}
        profile={profile}
        key={item.id}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  console.log(data,'d')

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header title={"Suggested Note"}/>
      <FlatList
            data={data?.data}
            renderItem={item => renderItem(item)}
            extraData={AllNotes}
            keyExtractor={item => item.id}
            // horizontal={true}
          />
      </View>
    </React.Fragment>
  );
};

export default AccountHoC(AllSuggestedNote);

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor:COLOR.white
    // justifyContent: 'flex-start',
    // right: WP(3),
    // marginTop: 25,
  },
  pdf: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 6,
    marginLeft: WP(1),
    marginTop: WP(2),
    backgroundColor: 'white',
  },
  subBookname: {
    marginTop: 30,
    width: WP(80)
  },

  bookName: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Inter-Bold',
    color:COLOR.black
  },
});
