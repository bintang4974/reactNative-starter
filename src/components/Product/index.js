import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Product = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={{ uri: 'https://placeimg.com/100/100/tech' }} style={styles.imageProduct} />
                <Text style={styles.productName}>New Brand 2021</Text>
                <Text style={styles.productPrice}>Rp. 15.000.000</Text>
                <Text style={styles.location}>Surabaya, Indonesia</Text>
                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>BELI</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8,
    },
    imageProduct: {
        width: 188,
        height: 107,
        borderRadius: 8
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16
    },
    productPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 14,
        color: '#e67e22'
    },
    location: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 12
    },
    buttonWrapper: {
        backgroundColor: '#2ecc71',
        marginTop: 18,
        borderRadius: 12,
        paddingVertical: 6
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})
