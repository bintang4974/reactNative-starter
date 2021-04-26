import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text style={styles.textCount}>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)} />
        </View>
    )
}

class CounterClass extends Component {
    state = {
        number: 0
    }

    handlePlus = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.textCount}>{this.state.number}</Text>
                <Button title="Tambah Class" onPress={this.handlePlus} />
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Component Dinamis Dengan State</Text>
            <Text>Functional Component (Hooks)</Text>
            <Counter />
            <Text style={styles.titleClass}>Class Component</Text>
            <CounterClass />
        </View>
    )
}

export default StateDinamis

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center',
        marginBottom: 20
    },
    textCount: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8
    },
    titleClass: {
        marginTop: 20
    }
})
