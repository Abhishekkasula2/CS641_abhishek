import { StatusBar } from 'expo-status-bar';
import {Image, ActivityIndicator, ScrollView,StyleSheet,Text, View} from 'react-native';

export default function App() {
  return (
   <ScrollView>
    <Text>Text1</Text>
    <Text>Text2</Text>
    <ActivityIndicator></ActivityIndicator>
    <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png',}}
  style={styles.tinyLogo}>
    </Image>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width:500,
    height:500,
  }
});
