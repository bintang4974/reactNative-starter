import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
        <View style={{ alignItems: 'center', margin: 20 }}>
            <Image source={{ uri: props.image }}
                style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.title}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Component Dinamis Props</Text>
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row' }}>
                    <Story title="Youtube Channel" image="https://placeimg.com/100/100/tech" />
                    <Story title="Random" image="https://www.clipartmax.com/png/middle/100-1003417_random-dice-icon-png.png" />
                    <Story title="Programming" image="https://e7.pngegg.com/pngimages/276/285/png-clipart-source-code-computer-programming-web-development-digital-development-computer-computer-programming.png" />
                    <Story title="Productivity" image="https://cdn.iconscout.com/icon/premium/png-512-thumb/productivity-2075482-1751755.png" />
                    <Story title="Works" image="https://www.clipartmax.com/png/middle/111-1110038_kirim-artikel-atau-berita-good-work-ethic.png" />
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis

const styles = StyleSheet.create({})
