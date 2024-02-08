import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddComment} from '../../Redux/action/Comments';
import {useSelector, useDispatch} from 'react-redux';

const Comments = () => {
  const [data, dataState] = useState([]);
  const dispatch = useDispatch();

  const saveComments = (id, comment) => {
    dispatch(AddComment({id, comment}));
  };

  return (
    <>
      
    </>
  );
};

export default Comments;

const styles = StyleSheet.create({});
