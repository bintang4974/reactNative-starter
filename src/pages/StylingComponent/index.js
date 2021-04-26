import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const StylingComponent = () => {
    return (
        <View>
            <Text style={styles.text}>Styling Component</Text>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: '#3498db',
                borderWidth: 2,
                borderColor: '#8e44ad',
                marginTop: 15,
                marginLeft: 30
            }} />
            <View style={{ padding: 12, backgroundColor: '#f2f2f2', width: 212 }}>
                <Image source={{ uri: 'https://placeimg.com/100/100/tech' }} style={{ width: 188, height: 107, borderRadius: 8 }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>New Brand 2021</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 14, color: '#e67e22' }}>Rp. 15.000.000</Text>
                <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>Surabaya, Indonesia</Text>
                <View style={{ backgroundColor: '#2ecc71', marginTop: 18, borderRadius: 12, paddingVertical: 6 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center' }}>BELI</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginLeft: 20,
        marginTop: 20
    }
})

export default StylingComponent;