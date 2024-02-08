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
import {GetAllNotes, GetSingleNotes} from '../Redux/action/Dashboard';
import Pdf from 'react-native-pdf';

import Orientation from 'react-native-orientation-locker';
import { COLOR } from '../utils/utils';

// react-native-vector-icons

const Search = props => {
  // const {profile} = props;
  // const newLibrary = useSelector(state => state.NewLibraryBook);

  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = () => {
  //   setRefreshing(false);
  //   dispatch(NewLibraryBook());
  // };

  // const {NewLibraryBooks, loading} = newLibrary;
  // console.log(loading, 'loading');
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(NewLibraryBook());
  // }, [dispatch, NewLibraryBook]);

  // useEffect(() => {
  //   dispatch(Get_Reading_Book());
  // }, [dispatch, Get_Reading_Book]);


  const EmptyNote = (
    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
      No Note is Found
    </Text>
  );

  // const EmptyNote = (
  //   <>
  //     <LoadingComponent />
  //   </>
  // );



  return (
      <View style={styles.container}>
        {/* <FlatList
          data={[]}
          renderItem={({item}) => {<></>}}
          keyExtractor={item => item.id}
          horizontal={false}
          // ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={EmptyNote}
          // refreshing={refreshing}
          // onRefresh={() => onRefresh()}
          ListHeaderComponent={
            <View>
            
            
            </View>
          }
        /> */}
      </View>
  );
};

export default  Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:COLOR.white
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 7,
    left: 10,
    paddingBottom: 10,
  },
  bookName: {
    position: 'absolute',
    left: 120,
    top: 10,
  },
});
