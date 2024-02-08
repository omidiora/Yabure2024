import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Link} from 'react-router-native';

const ThankYou = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank You For Uploading </Text>
      <View style={styles.imageContainer}>
        {/* <Image source={require('../assets/ThankYou.png')} /> */}
      </View>
      <View style={styles.text2Container}>
        <Link  underlayColor="green"to="/" sty>
          <Text style={[styles.text2, {color: "#302675",}]}>Click Here</Text>
        </Link>
        <Text style={styles.text2}>{" "}to goto back to Dashboard</Text>
      </View>
    </View>
  );
};

export default ThankYou;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 55,
  },
  text: {
    lineHeight: 50,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 55,
    left: 16,
  },
  imageContainer:{
      top:70,
      justifyContent: 'center',
      left:15,
  },
  text2Container:{
      top:90,
      flexDirection: 'row',
      paddingVertical:10,
      fontSize:200
      
  },
  text2:{
      fontSize:20,
      fontWeight: "600"
  }
});
