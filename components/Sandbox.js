import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function Sandbox() {
    return (

        <View style={styles.container}>
            <Text style={styles.One}>One</Text>
            <Text style={styles.Two}>Two</Text>
            <Text style={styles.Three}>Three</Text>
            <Text style={styles.Four}>Four</Text>
            <Text style={styles.Five}>Five</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: "#ddd",
        flexDirection:"row",
        // flex:1 ,//it will take all width of the screen,
        justifyContent:"space-between",
        alignItems:"center",

    },
    One: {
        backgroundColor: "violet",
        padding: 10
    },
    Two: {
        backgroundColor: "gold",
        padding: 20
    },
    Three: {
        backgroundColor: "coral",
        padding: 30
    },
    Four: {
        backgroundColor: "pink",
        padding: 50
    },
    Five: {
        backgroundColor: "skyblue",
        padding: 60
    }
})