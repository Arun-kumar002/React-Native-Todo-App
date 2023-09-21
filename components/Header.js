import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>MY TODO'S</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "coral"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold"
    }
})