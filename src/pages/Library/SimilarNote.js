import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Pdf from 'react-native-pdf';
import AccountHoC from '../../hoc/AccountHoC';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import Rating from 'react-native-easy-rating';
import {Capitalize} from '../../utils/Captilze';
const Item = ({item = {}, onPress, backgroundColor, textColor, profile}) => {
  const [numberOfPages, setNumberPages] = React.useState();
  const [rating, setRating] = React.useState(item?.rating?.total || 0);

  const source = {
    uri: item?.book,
    cache: true,
  };

  const dispatch = useDispatch();

  const PreviewNotes = async id => {
    // await dispatch(GetSingleNotes(id));
    const PagesRead = JSON.parse(
      await AsyncStorage.getItem('PagePercentageRead'),
    );
    // SetPercentageRead(PagesRead);

    return RootNavigation.navigate('PreviewPdf', {
      itemId: id,
      singleBook: item,
    });
  };

  return (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={id => PreviewNotes(item?.id)}>
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
        <View style={{marginTop: 30}}>
          <Text style={{fontWeight: 'bold', fontFamily: 'Inter-ExtraBold'}}>
            {Capitalize(item?.bookName)}
          </Text>

          <Text>
            Uploader:
            <Text style={{fontWeight: 'bold', color: '#302675'}}>
              @{item?.user.profile.username}
            </Text>
          </Text>
          <View>
            <Text>
              <Rating
                rating={rating}
                iconWidth={14}
                iconHeight={14}
                onRate={setRating}
              />
              {rating == 0 ? ' (0 rating)' : ' ' + rating}
            </Text>
            <Text>{new Date(item?.createdAt).toLocaleDateString()}</Text>
          </View>
        </View>
      </View>
    </View>

    //   {/* <Text>{item.book}</Text> */}
    // // </TouchableOpacity>
  );
};

const SimilarNote = props => {
  const {profile} = props;
  const AllNotes = useSelector(state => state.SuggestedNote.suggestedNote || [])
    .sort(() => Math.random() - 0.5)
    .slice(1, 14);

  //

  // Math.min(arr.length, 4);

  const dispatch = useDispatch();

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
        //  onPress={() => selectItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        {AllNotes?.length == 0 ? (
          <View style={{textAlign: 'center', top: '30%'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                paddingBottom: WP(30),
              }}>
              No Note Available
            </Text>
          </View>
        ) : (
          <FlatList
            data={AllNotes}
            renderItem={item => renderItem(item)}
            extraData={AllNotes}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </React.Fragment>
  );
};

export default AccountHoC(SimilarNote);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    // marginTop: 25,
  },
  pdf: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 6,
    marginLeft: 2,
    marginTop: 10,
    backgroundColor: 'white',
  },
});
