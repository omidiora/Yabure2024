import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Pdf from 'react-native-pdf';
import Header from '../../component/Header';
import AccountHoC from '../../hoc/AccountHoC';
const Item = ({item, onPress, backgroundColor, textColor, profile}) => {
  const [numberOfPages, setNumberPages] = React.useState();
  const source = {
    uri: item?.book,
    cache: true,
  };

  return (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container} >
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
        <View style={styles.bookName} key={item.id}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {item?.bookName}
          </Text>
          <View>
            <Text>@{profile?.username}</Text>
          </View>
        </View>
      </View>
    </View>

    //   {/* <Text>{item.book}</Text> */}
    // // </TouchableOpacity>
  );
};

const AllNotes = props => {
  const {profile} = props;
  const {goBack} = props.navigation;
  const AllNotes = useSelector(state => state.Notes.notes);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetAllNotes());
  // }, []);

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
      <Header title="Notes Uploaded" onPress={() => goBack()} />
      <View style={styles.container}>
        {AllNotes.length == 0 ? (
          <View style={{textAlign: 'center', top: '30%'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              No Note Available
            </Text>
          </View>
        ) : (
          <FlatList
            data={AllNotes}
            renderItem={item => renderItem(item)}
            extraData={AllNotes}
            keyExtractor={item => item.id}
            horizontal={false}
          />
        )}
      </View>
    </React.Fragment>
  );
};

export default AllNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    left: 10,
    backgroundColor: 'white',
  },
  bookName: {
    left: 40,
    top: 140,
  },
});
