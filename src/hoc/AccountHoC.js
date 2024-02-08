import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const AccountHoC = Component =>
  function Comp(props) {
    const dispatch = useDispatch();
    const profile = {};
    // React.useEffect(() => {
    //   dispatch(Getprofiles());
    // }, [dispatch]);

    return <Component profile={profile} {...props} />;
  };
export default AccountHoC;
