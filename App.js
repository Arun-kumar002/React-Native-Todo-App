import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Add from "./components/Add"
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
  )

  const handleDelete = (key) => {
    setState((prev) => {
      return prev.filter((v) => v.key != key)
    })
  }

  const handleCreate = (text) => {
    setState([...state, { key: state.length + 1, text: text }])
  }

  return (
    <View style={styles.container}>

      {/* Headers */}
      <Header />
      <View style={styles.content}>
        {/* Todo Form */}
        <Add handleCreate={handleCreate} />
        <View style={styles.list}>
          <FlatList
            data={state}
            renderItem={({ item }) => { return <TodoItem item={item} handleDelete={handleDelete} /> }
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20
  }

});
