import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';


const Item = ({item, backgroundColor, textColor, payment, email = ''}) => (
  
  <TouchableOpacity
    onPress={() => payment(email, item.id)}
    style={[styles.item, backgroundColor]}>
    <View style={styles.content}>
      <View>
        <Image source={require('../../assets/images/naira.png')} />
      </View>
      <View>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.view_amount}</Text>
        <Text style={[styles.title, textColor]}>{item.text}</Text>
      </View>
      <View>
        <TouchableOpacity  onPress={() => payment(email, item.id)}>
          <Text style={styles.pay}>+Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const Subscription = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const listOfpayment = useSelector(
    state => state.getPaymentList.listOfPayment.data || [],
  );

  const [emailValue, setEmailValue] = useState('');



  const payment = async (userEmail, planId) => {
    let email;
    email = JSON.parse(await AsyncStorage.getItem('email'));
    if (email == null) {
      email = JSON.parse(await AsyncStorage.getItem('loginEmail'));
    } else {
      email = JSON.parse(await AsyncStorage.getItem('email'));
    }
    if (email !== null) {
      // dispatch(subscriptionPayment(email, planId, navigation));
    }
  };

  // const email = JSON.parse(await AsyncStorage.getItem('email'));
  // try {
  //   AsyncStorage.getItem('email', (err, item) => {
  //     if (item == null) {
  //       console.log(item, 'item');
  //     }
  //   });
  // } catch (error) {
  //   console.log('Error retrieving data' + error);
  // }

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#E8FBFA' : '#E8FBFA';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        payment={payment}
        email={emailValue}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listOfpayment}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: '#302675',
  },
  pay: {
    color: '#302675',
    bottom: 17,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Subscription;
