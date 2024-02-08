import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import Pdf from 'react-native-pdf';

import {TouchableOpacity} from 'react-native-gesture-handler';
import ViewContainer from '../../component/ViewContainer';
import {useGetAllBooksQuery} from '../../Redux/action/Dashboard/api';
import FastImage from 'react-native-fast-image';
import {COLOR} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';

const SuggestedNotes = props => {
  const {data, error, isLoading} = useGetAllBooksQuery();
  const navigation = useNavigation();

  // useEffect(() => {
  //   getAllBooks().then((response)=>{
  //     console.log(response,'aldmlamlfmladmlmslml');
  //   })
  // }, [])

  // console.log(data?.data, isLoading, error, 'getA1llBooks');

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data?.data}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Explanation', {
                  item,
                })
              }>
              <Pdf
                trustAllCerts={false}
                fitPolicy={1}
                singlePage={true}
                source={{
                  uri: item?.book,
                }}
                page={1}
                style={styles.pdf}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default SuggestedNotes;

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //  backgroundColor:COLOR.black
    // justifyContent: 'flex-start',
    // marginTop: 25,
  },
  pdf: {
    width: Dimensions.get('window').width / 7,
    height: Dimensions.get('window').height / 10,
    marginLeft: 2,
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: WP(2),
  },
});
