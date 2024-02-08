import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Modal from 'react-native-modal';

import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {SwipeablePanel} from 'rn-swipeable-panel';
// import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import FormButton from '../../component/FormButton';
import {useSelector, useDispatch} from 'react-redux';
import FormCustomButton from '../../component/FormCustomButton';
import {
  AddComment,
  getComments,
  ReplyComment,
} from '../../Redux/action/Comments';
import {AddRating} from '../../Redux/action/Libarary';

import {Rating, AirbnbRating} from 'react-native-ratings';

const Explanations = props => {
  const {
    navigation,
    route: {
      params: {singleBook},
    },
  } = props;
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Explanations',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
      },
    });
  }, [navigation]);

  const source = {
    uri: props.route.params?.item?.book,
    cache: true,
  };
  //

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [textComment, setTextComment] = useState('');
  const listOfComment = useSelector(
    state => state?.Comments?.comments?.comments || [],
  );
  const [isVisible, setIsVisible] = useState(false);
  const [showThank, setShowThank] = useState(false);

  //  setModalVisible
  const [selected, setSelected] = useState(null);
  const [replyComment, setReplyComment] = React.useState('');
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  useEffect(() => {
    // dispatch(getComments(singleBook?.id));
  }, []);

  const saveComments = (id, text, book) => {
    // dispatch(AddComment(id, text, book));
    setTextComment('');
  };

  const fetchData = () => {
    // dispatch(getComments(singleBook?.id));
    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };
  const timerRef = useRef(null);
  timerRef.current = setTimeout(() => setIsVisible(true), 3000);
  const ratingCompleted = rating => {
    // console.log(rating, 'rating')
    clearTimeout(timerRef.current);
    // dispatch(AddRating(singleBook?.id, rating));
    setShowThank(true);
    setIsVisible(false);
  };

  const replyToCommentSection = (commentId, bookId, reply) => {
    // dispatch(ReplyComment(commentId, bookId, reply));
  };


  return (
    <View>
      <View>
        <View style={styles.pdfContainer}>
          <Pdf
            horizontal={false}
            source={source}
            // singlePage={true}
            // onLoadComplete={(numberOfPages, filePath) => {
            //   setTotalPage(numberOfPages);
            // }}
            onPageChanged={(page, numberOfPages) => {
              // addToFinshedBook(page, numberOfPages, singleBook?.id);
              // setNumPages(page);
            }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
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

        <View>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => openPanel()}>
              <Image
                style={styles.imageArrow}
                source={require('../../assets/images/arrowUp.png')}
              />
              <Text style={{color: 'black', textAlign: 'center'}}>
                Pull Up for Explanations
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <SwipeablePanel {...panelProps} isActive={isPanelActive}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              // marginTop: WP(-23),
            }}>
            <View
              style={{
                width: WP('85%'),
                height: HP(7),
                borderWidth: 2,
                marginRight: WP(3),

                left: WP(2),
                marginVertical: WP(6),
                top: WP(3),
                borderRadius: WP(5),
                // marginTop: WP(-23),
              }}>
              <KeyboardAvoidingView>
                {/* <AutoGrowingTextInput
                  placeholder="Enter Your Comment"
                  value={textComment}
                  onChangeText={newText => setTextComment(newText)}
                  style={{color: 'black'}}
                /> */}
              </KeyboardAvoidingView>
            </View>

            {textComment == '' ? null : (
              <Touchabl
              eOpacity
                onPress={() =>
                  saveComments(singleBook?.id, textComment, singleBook?.id)
                }>
                <Image
                  source={require('../../assets/images/commentIcon.png')}
                  style={{
                    width: WP(10),
                    // right: WP(7),
                    height: HP(5),
                    top: WP(10),
                    marginRight: WP(5),
                  }}
                />
              </Touchabl>
            )}
          </View>

          {/* <View style={styles.formButtonContainer}>
            {textComment == '' ? (
              <FormCustomButton buttonTitle="Send" disabled={true} />
            ) : (
              <FormButton
                buttonTitle="Send"
                onPress={() => saveComments(singleBook?.id, textComment)}
              />
            )}
          </View> */}
          {/* <PanelContent /> Your Content Here */}

          <FlatList
            data={listOfComment}
            keyExtractor={(item, index) => 'states-item' + index.toString()}
            extraData={listOfComment}
            onRefresh={onRefresh}
            refreshing={isFetching}
            renderItem={({item, index}) => {
              console.log(item, 'item');
              return (
                <View key={index}>
                  <View>
                    <View style={{flexDirection: 'column'}}>
                      <ScrollView
                        style={{
                          backgroundColor: 'white',
                        }}>
                        <View>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: WP(5),
                                paddingTop: WP(5),
                              }}>
                              <View>
                                <View style={{flexDirection: 'row'}}>
                                  <View style={{left: WP(3)}}>
                                    <Image
                                      source={require('../../assets/images/profile2.png')}
                                      style={{width: WP(13), height: WP(10)}}
                                    />
                                  </View>

                                  <View>
                                    <Text
                                      style={{
                                        color: 'black',
                                        background: 'purple',
                                        fontWeight: '500',
                                        left: WP(5),
                                        fontFamily: 'Inter-Bold',

                                        // position: 'absolute',
                                        // top:130
                                      }}>
                                      @{item.username}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                              <View style={{right: WP(3)}}>
                                {/* <Text>1hr ago</Text> */}
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={{width: WP(90), justifyContent: 'center'}}>
                          <Text
                            style={{
                              flexWrap: 'wrap',
                              flexShrink: 1,
                              left: WP(18),
                              flexGrow: 3,
                              flex: 1,
                              paddingBottom: WP(-5),
                              bottom: WP(8),
                              width: WP(70),
                              color: 'black',
                              // https://meet.google.com/hcb-rned-mpw

                              // position: 'absolute',
                              // top:130
                            }}>
                            {item.comment}
                          </Text>

                          <View>
                            {/* Reply Section */}

                            {/* <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity
                                onPress={() => console.log('1111111')}>
                                <View style={styles.replyContainer}>
                                  <Image
                                    style={styles.imageArrow1}
                                    source={require('../../assets/reply.png')}
                                  />
                                  <View style={styles.repyIcon}>
                                    <Text>Reply</Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View> */}
                            {/* <View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',

                                  // marginTop: WP(-23),
                                }}>
                                <View
                                  style={{
                                    width: WP('75%'),
                                    height: HP(7),
                                    borderWidth: 2,
                                    marginRight: WP(3),

                                    left: WP(5),
                                    marginVertical: WP(6),
                                    top: WP(3),
                                    // marginTop: WP(-23),
                                  }}>
                                  <KeyboardAvoidingView>
                                    <AutoGrowingTextInput
                                      placeholder="Reply"
                                      value={replyComment}
                                      onChangeText={newText =>
                                        setReplyComment(newText)
                                      }
                                      style={{color: 'black'}}
                                    />
                                  </KeyboardAvoidingView>
                                </View>
                                {replyComment == '' ? null : (
                                  <TouchableOpacity
                                    onPress={() =>
                                      replyToCommentSection(
                                        singleBook?.id,
                                        item?.id,
                                        replyComment,
                                      )
                                    }>
                                    <Image
                                      source={require('../../assets/commentIcon.png')}
                                      style={{
                                        width: WP(10),
                                        // right: WP(7),
                                        height: HP(5),
                                        top: WP(10),
                                        marginLeft: WP(8),
                                      }}
                                    />
                                  </TouchableOpacity>
                                )}
                              </View>
                            </View> */}
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                      }}></View>
                  </View>
                </View>
              );
            }}
          />

          <View>
            {listOfComment.length == 0 ? (
              <Text style={{textAlign: 'center'}}>
                Be the first to comment{' '}
              </Text>
            ) : null}
          </View>
        </SwipeablePanel>
      </View>
      {/* <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onBackButtonPress={() => setIsVisible(false)}
        backdropOpacity={0.1}>
        <View style={styles._modelContainer}>
          <View style={styles._model}>
            {/* showThank */}
      {/* 
            {showThank ? (
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Thank You{' '}
              </Text>
            ) : (
              <View>
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  Rating {singleBook?.name}
                </Text>

                <AirbnbRating
                  count={5}
                  defaultRating={0}
                  size={20}
                  onFinishRating={ratingCompleted}
                />
              </View>
            )}
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default Explanations;

const styles = StyleSheet.create({
  pdf: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 1,
    backgroundColor: 'white',
    left: 6,
    bottom: 30,
  },
  arrowContainer: {
    // padding: 20,
    // marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: WP(33),
  },
  imageArrow: {
    left: WP(14),
  },
  formButtonContainer: {
    left: WP(60),
    width: WP(25),
    // top: WP(23)
    // // position: 'absolute',
    // marginLeft:WP(35),
    // flex:1,
    // left: WP(14),
  },
  imageArrow1: {
    width: WP(4),
    height: HP(2),
  },
  replyContainer: {
    // bottom: WP(12),
    // marginLeft: WP(16),
    // top: WP(-13),
    marginLeft: WP(17),
  },
  repyIcon: {
    bottom: WP(4),
    left: WP(5),
  },
  _modelContainer: {
    justifyContent: 'center',
  },
  _model: {
    width: WP('40'),
    height: WP('25'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: 18,
    borderColor: 'white',
    left: WP(25),
    top: WP(-14),
  },
  _modelText: {
    // fontSize: WP(TEXT_SIZES.info_1),
  },
  nullComment: {
    position: 'absolute',
    top: WP(22),
    paddingBottom: 160,
    zIndex: 13,
    alignSelf: 'center',
    marginLeft: WP(23),
    height: WP(233),

    // marginVertical: WP(15),
  },
});
