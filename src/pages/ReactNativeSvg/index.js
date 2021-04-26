import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Mobile from '../../assets/icons/mobile.svg'

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>React Native SVG</Text>
            <Mobile width={244} height={244} />
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
