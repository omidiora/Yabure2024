import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  TextView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import Finished from './Finished';
// import New from './New';
import Reading from './Reading';
import New from './New';
import Finished from './Finished';


const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
 first: New,
   second: Finished,
  third: Reading,
});


export default function Library() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New'},
    {key: 'second', title: 'Finished'},
    {key: 'third', title: 'Reading'},
  ]);

  return (
    <>
      <Text style={styles.libraryText}>Library</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{backgroundColor: ' #E5E5E5'}}
            renderLabel={({route, focused, color}) => (
              <Text
                style={{
                  color: focused ? '#302675' : '#555145',
                  opacity: focused ? 1 : 0.5,
                  fontSize: 20,
                }}>
                {route.title}
              </Text>
            )}
            indicatorStyle={styles.indicatorStyle}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: '#302675',
  },
  libraryText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    left: 30,
  },
});
