import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {View, StyleSheet, Button ,Text} from 'react-native';
const myErrorHandler = error => {
    console.log(error, 'eeeeeeee')
  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};
function ErrorFallback({resetErrorBoundary}) {
  return (
    <View style={[styles.container]}>
      <View>
        <Text> Something went wrong: </Text>
        <Button title="try Again" onPress={resetErrorBoundary} />
      </View>
    </View>
  );
}
export const ErrorHandler = ({children}) => (
    
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    {children}
  </ErrorBoundary>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
});
