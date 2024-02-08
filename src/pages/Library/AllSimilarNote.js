import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  GetAllNotes,
  GetSingleNotes,
  SuggestedNote,
} from '../../Redux/action/Dashboard';
import Pdf from 'react-native-pdf';
import {Get_Reading_Book, NewLibraryBook} from '../../Redux/action/Libarary';
import * as RootNavigation from '../../Navigations/RootNavigation';
import * as Progress from 'react-native-progress';
import AccountHoC from '../../hoc/AccountHoC';
import {GetSingleProfile} from '../../Redux/action/profile';

const Item = ({item, onPress, backgroundColor, textColor, profile}) => {
  const [numberOfPages, setNumberPages] = React.useState();
  const source = {
    uri: item?.book,
    cache: true,
  };
  const dispatch = useDispatch();

  const state = useSelector(state => state.SingleNotes.singleBook);
  const IndividualProfile = useSelector(state => state.SingleProfile);
  const [PercentageRead, SetPercentageRead] = useState(1);

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

  const getIndividualProfile = id => {
    // dispatch(GetSingleProfile(id));
    return RootNavigation.navigate('IndividualProfile', {
      IndividualProfile: id,
    });
  };

  useEffect(() => {
    // dispatch(Get_Reading_Book());
  }, [dispatch,]);

  return (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={id => PreviewNotes(item.id)}>
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
          </TouchableOpacity>
        </View>
        <View style={styles.bookName} key={item.id}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Inter-Medium',
            }}>
            {item?.bookName}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                color: 'rgba(51, 51, 51, 0.65)',
                fontFamily: 'Inter-Medium',
              }}>
              Uploader :
            </Text>
            <TouchableOpacity
              onPress={() => getIndividualProfile(item?.user?.id)}>
              <Text style={{color: '#302675', fontFamily: 'Inter-ExtraBold'}}>
                {' '}
                @{item?.user?.profile?.username}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{top: 10, color: '#302675'}}>
            <TouchableOpacity onPress={id => PreviewNotes(item.id)}>
              <Text style={{color: '#302675', fontFamily: 'Inter-Medium'}}>
                Open Note
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    //   {/* <Text>{item.book}</Text> */}
    // // </TouchableOpacity>
  );
};

const ItemSeparator = () => (
  <View
    style={{
      height: 1,
      backgroundColor: ' rgba(112, 108, 97, 0.4)',
      marginLeft: 10,
      marginRight: 10,
      opacity: 0.4,
    }}
  />
);

const AllSimilarNote = props => {
  const {profile} = props;
  const NewLibraryBooks = useSelector(
    state => state.SuggestedNote.suggestedNote || [],
  )
    .sort(() => Math.random() - 0.5)
    .slice(1, 14);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(false);
    // dispatch(NewLibraryBook());
  };

  //   const {NewLibraryBooks} = newLibrary;
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(SuggestedNote());
  }, []);

  useEffect(() => {
    // dispatch(Get_Reading_Book());
  }, [dispatch, ]);

  const EmptyNote = (
    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
      No Note is Available
    </Text>
  );

  const renderItem = props => {
    const {item} = props;
    const backgroundColor = item.selected ? '#302675' : 'yellow';
    const color = item.selected ? 'yellow' : 'black';

    return (
      <Item
        item={item}
        profile={profile}
        key={item.id}
        //  onPress={() => selectItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <FlatList
          data={NewLibraryBooks}
          renderItem={item => renderItem(item)}
          extraData={NewLibraryBooks}
          keyExtractor={item => item.id}
          horizontal={false}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyNote}
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
        />
      </View>
    </React.Fragment>
  );
};

export default AccountHoC(AllSimilarNote);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 6,
    left: 10,
  },
  bookName: {
    position: 'absolute',
    left: 120,
    top: 10,
  },
});
