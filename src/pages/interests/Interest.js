import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FormButton from '../../component/FormButton';
import FormButtonCustom from '../../component/FormCustomButton';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Capitalize} from '../../utils/Captilze';

const Interest = () => {
  const dispatch = useDispatch();
  const interestData = useSelector(state => state.interest.interest || []);
  const [interestField, setInterestField] = useState([]);

 
  const selectItem = data => {
    data.selected = !data.selected;
    const index = interestData.findIndex(item => data.id === item);
    interestData[index] = data;
    setInterestField(interestData[index]);

    // setInterest(!data.selected);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
          }}
          style={styles.iconContainer}>
          <Icon name="chevron-back" size={WP(6)} color={'#686B6F'} />
        </TouchableOpacity>
        <View style={styles.rulesHeaderContainer}>
          <Text style={styles.rulesText}>What are your interests?</Text>
        </View>
      </View>
      <View style={styles.line} />

      <View>
        <FlatList
          data={[]}
          horizontal={false}
          keyExtractor={item => '_' + item.id}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.flatListContainer}>
                  <TouchableOpacity
                    style={[
                      styles.flatListItem,
                      {backgroundColor: item.selected ? '#302675' : 'white'},
                    ]}
                    onPress={() => selectItem(item)}>
                    <Text style={{color: item.selected ? 'white' : 'black'}}>
                      {Capitalize(item?.field)}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingBottom: WP(8),
    left: WP(-10),
    marginTop: WP(1),
  },
  rulesHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: WP(6),
    top: WP(-3),
  },
  rulesText: {
    fontSize: WP(5),
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'Inter-SemiBold',
  },
  line: {
    borderBottomColor: 'rgba(112, 108, 97, 0.3)',
    borderBottomWidth: 1,
    top: WP(-6),
  },
  flatListContainer: {
    justifyContent: 'center',
    left: WP(2),
    padding: WP(5),
    // flexDirection: 'row',
    // justifyContent: 'center',
    // width: '38%',
    // // left: 10,
    // height: windowHeight / 17,
    // backgroundColor: '#302675',
    // // padding: 10,
    // alignItems: 'center',
    // // justifyContent: 'center',
    // borderRadius: 3,
    // borderColor: '#C4C4C4',
    // borderWidth: 1,
    // padding: 2,
    // marginVertical: 20,
    // marginHorizontal: 16,
  },
  flatListItem: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
