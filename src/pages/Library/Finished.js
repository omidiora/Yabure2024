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
import Pdf from 'react-native-pdf';
import {FTfamily, TextSizes} from '../../utils/TextUtil';
import {COLOR, HP, WP} from '../../utils/utils';
import {useGetAllBooksQuery} from '../../Redux/action/Dashboard/api';
// import {Rating} from 'react-native-rating-element';
import { Rating } from '@kolking/react-native-rating';

const Finished = props => {

  const {data, error, isLoading} = useGetAllBooksQuery();
  return (
  <View style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.pdf}>
      <View style={styles.container}>
        <FlatList
          data={data?.data}
          renderItem={({item}) => (
            <View style={styles.pdfContainer}>
              <View style={styles.rowPdf}>
                <Pdf
                  trustAllCerts={false}
                  source={{
                    uri: item?.book,
                  }}
                  page={1}
                  style={styles.pdfBook}
                />
                <View style={styles.rowTopic}>
                <View>
                  <View style={{ flexDirection: 'row'  }}>
                  <Text style={styles.bookName}>{item?.bookName}</Text>
                  </View>
                  <Text style={styles.username}>
                    {' '}
                    Uploader :
                    <Text style={styles.profile}>
                      @{item?.user?.profile?.username}
                    </Text>
                  </Text>
                  <Rating size={10} rating={2} onChange={()=>{}} />
                  <Text style={styles.complete}>100% Complete</Text>
                </View>
                  {/* <Rating
                    rated={4}
                    totalCount={5}
                    ratingColor="red"
                    ratingBackgroundColor="black"
                    size={214}
                    readonly // by default is false
                    icon="ios-star"
                    direction="column" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                  /> */}
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={false}
        />
      </View>
    </View>
  </View>
  );
};

export default Finished;

const styles = StyleSheet.create({
  pdf: {},
  pdfBook: {
    width: Dimensions.get('window').width / 4.8,
    height: Dimensions.get('window').height / 7,
    left: 2,
    paddingTop: 30,
    marginHorizontal:10
  },
  rowPdf: {
    flexDirection: 'row',
   
  },
  bookName: {
    paddingTop: HP(5),
    color: COLOR.mainColor,
    fontFamily: FTfamily.medium,
    textTransform: 'capitalize',
    flexShrink: 1,
  },
  username: {
    marginLeft: -4,
  },
  profile: {
    fontWeight: 'bold',
    color: COLOR.mainColor,
  },
  preview: {
    fontFamily: FTfamily.bold,
    color: COLOR.mainColor,
    // fontWeight:"bold",
    fontSize: WP(TextSizes.xs + 1.3),
  },
  previewContainer: {
    marginTop: 5,
  },
  complete:{
    fontFamily:FTfamily.regular,
    color:COLOR.mainColor
  },
  rowTopic:{marginLeft:WP(3)}
});
