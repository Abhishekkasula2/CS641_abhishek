import * as React from 'react';
import {TouchableOpacity , View, Text } from 'react-native';
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Details')}> 
            <Text>go to different page.</Text>
            </TouchableOpacity>
      </View>
    );
  }
  
  export default HomeScreen;