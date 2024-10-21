import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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