import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const name = "Abhishek"; 
  const start= 2; 
  return (
    <View style={styles.container}>
      <Display name={name} />
      <Counter inital={start}/>
      <StatusBar style="auto" />
    </View>
  );
}

function Counter({inital}) {
  const [count, setCount] = useState(inital);
  
  return (
    <View>
      <Text>Counter: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={styles.button}>Increment</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function Display({ name }) {
  return (
    <View>
      <Text>Name: {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#FF0000',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
