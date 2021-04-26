import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#686de0' }} />
      <Text>Bintang Ramadhan</Text>
      <Text>Bintang Ramadhan</Text>
      <Text>Bintang Ramadhan</Text>
      <Nopo />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Nopo = () => {
  return (
    <Text>Naufal Nopo</Text>
  )
}

const Photo = () => {
  return (
    <Image source={{ uri: 'https://placeimg.com/100/100/tech' }}
      style={{ width: 100, height: 100 }} />
  )
}

class BoxGreen extends Component {
  render() {
    return (
      <Text>Class Component</Text>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://placeimg.com/100/100/animals' }}
          style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 24 }}>Ini Hewan</Text>
      </View>
    )
  }
}

export default SampleComponent;