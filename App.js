import { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Add from "./components/Add"
import Sandbox from './components/Sandbox';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  let [state, setState] = useState(
    [
      {
        text: "Buy Coffee", key: 1
      },
      {
        text: "Start To Build A Native App", key: 2
      },
      {
        text: "Skip Using Mobile Unnecessarily", key: 3
      }
    ]
  );

  const handleDelete = (key) => {
    setState((prev) => {
      return prev.filter((v) => v.key != key)
    })
  }

  const handleCreate = (text) => {
    if (text.length > 0) {
      setState([...state, { key: Math.random(), text: text }])
    } else {
      Alert.alert("OOPS!", "Enter Something Bro...OkWa", [
        { text: "Understood", onPress: () => { console.log('alert closed') } }
      ])
    }
  }

  return (
    // // <SafeAreaView>
    //   <Sandbox />
    // // </SafeAreaView>
    <TouchableWithoutFeedback onPress={() => { console.log('Dismissed Keyboard'); Keyboard.dismiss(); }}>
      <View style={styles.container}>
        {/* Headers */}
        <Header />
        <View style={styles.content}>
          {/* Todo Form */}
          <Add handleCreate={handleCreate} />
          <View style={styles.list}>
            <FlatList
              data={state}
              renderItem={({ item }) => { return <TodoItem item={item} handleDelete={handleDelete} /> }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex:1
  }

});
