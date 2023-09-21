import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';


export default function Add({ handleCreate }) {
    const [state, setState] = useState("")
    const handleChange = (e) => {
        setState(e)
    }

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Create A New TODO'
                onChangeText={handleChange}
            />
            <Button onPress={() => {
                handleCreate(state)
                setState("")
            }} title="Add Todo" color="coral" />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    }
})