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
import {useGetAllBooksQuery} from '../Redux/action/Dashboard/api';
import Pdf from 'react-native-pdf';
import {COLOR, HP, WP} from '../utils/utils';
import { FTfamily, TextSizes } from '../utils/TextUtil';

const BookComponent = props  => {
console.log(props?.data,'111')
  return (
    <View style={styles.pdf}>
      <View style={styles.container}>
        <FlatList
          data={props.data}
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
                <View>
                  <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.bookName}>{item?.bookName}</Text>
                  </View>
                  <Text style={styles.username}>
                    {' '}
                    Uploader :
                    <Text style={styles.profile}>
                      @{item?.user?.profile?.username}
                    </Text>
                  </Text>
                  <TouchableOpacity style={styles.previewContainer}>
                    <Text  style={styles.preview}>Preview </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={false}
        />
      </View>
    </View>
  );
};

export default BookComponent;

const styles = StyleSheet.create({
  pdf: {},
  pdfBook: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 7,
    // left: 10,
    paddingTop: 30,
    
  },
  rowPdf: {
    flexDirection: 'row',
  },
  bookName: {
    paddingTop: HP(5),
    color: COLOR.mainColor,
    fontFamily:FTfamily.medium,
    textTransform: 'capitalize' ,
    flexShrink: 1
  },
  username: {
    marginLeft: -4,
  },
  profile: {
    fontWeight: 'bold',
    color: COLOR.mainColor,
  },
  preview:{
    fontFamily:FTfamily.bold,
    color:COLOR.mainColor,
    // fontWeight:"bold",
    fontSize:WP(TextSizes.xs+1.3)
  },
  previewContainer:{
    marginTop:5
  }
});
