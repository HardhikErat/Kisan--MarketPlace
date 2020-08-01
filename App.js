 import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    const injectedJS = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); true`;
    return (
      <View style={styles.container}>
        <WebView
            style={styles.webview}
            source={{ uri: 'https://hardhikerat.github.io/Kisan-MarketPlace/' }}
            injectedJavaScript={injectedJS}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  webview: {
    flex: 1
  }
});
