import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, handleDelete }) {
    return (
        <TouchableOpacity onPress={() => { handleDelete(item.key) }}>
            <Text style={styles.item} key={item.key}>{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
    }
})