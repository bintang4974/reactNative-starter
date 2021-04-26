import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

// class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log('=> constructor');
//         this.state = {
//             subscriber: 100
//         }
//     }

//     componentDidMount() {
//         console.log('=> componentDidMount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: this.state.subscriber + 400
//             });
//         }, 3000);
//     }

//     componentDidUpdate() {
//         console.log('=> componentDidUpdate');
//     }

//     render() {
//         console.log('=> render');
//         return (
//             <View>
//                 <View style={{
//                     flexDirection: 'row',
//                     backgroundColor: '#bdc3c7',
//                     alignItems: 'flex-start',
//                     justifyContent: 'space-between'
//                 }}>
//                     <View style={{ backgroundColor: '#e74c3c', width: 50, height: 50 }} />
//                     <View style={{ backgroundColor: '#27ae60', width: 50, height: 50 }} />
//                     <View style={{ backgroundColor: '#8e44ad', width: 50, height: 50 }} />
//                     <View style={{ backgroundColor: '#f1c40f', width: 50, height: 50 }} />
//                 </View>

//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>
//                 </View>

//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 4 }}>
//                     <Image source={{ uri: 'https://placeimg.com/100/100/animals' }}
//                         style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }} />
//                     <View style={{ flexDirection: 'column' }}>
//                         <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bintang Bintank</Text>
//                         <Text>{this.state.subscriber} Subscriber</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    useEffect(()=> {
        console.log('didMount');
        setTimeout(() => {
            setSubscriber(400);
        }, 3000);
        return () => {
            console.log('didUpdate');
        }
    }, [subscriber]);

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#bdc3c7',
                alignItems: 'flex-start',
                justifyContent: 'space-between'
            }}>
                <View style={{ backgroundColor: '#e74c3c', width: 50, height: 50 }} />
                <View style={{ backgroundColor: '#27ae60', width: 50, height: 50 }} />
                <View style={{ backgroundColor: '#8e44ad', width: 50, height: 50 }} />
                <View style={{ backgroundColor: '#f1c40f', width: 50, height: 50 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 4 }}>
                <Image source={{ uri: 'https://placeimg.com/100/100/animals' }}
                    style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bintang Bintank</Text>
                    <Text>{subscriber}K Subscriber</Text>
                </View>
            </View>
        </View>
    )
}

export default FlexBox;