import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={{ uri: 'https://toppng.com/uploads/preview/shopping-cart-115309972353g1kktalus.png' }}
                    style={styles.iconCart} />
                <Text style={styles.notify}>10</Text>
            </View>
            <Text style={styles.textCart}>Keranjang Belanja Anda Test</Text>
        </View>
    )
}

export default Position;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper: {
        width: 93,
        height: 93,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    iconCart: {
        width: 50,
        height: 50
    },
    textCart: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    notify: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#2ecc71',
        padding: 5,
        borderRadius: 50,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
