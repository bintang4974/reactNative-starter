import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallAPIVanilla = () => {
    const [dataUser, seDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    });

    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    });

    useEffect(() => {
        // Call API Method GET
        // fetch('https://reqres.in/api/users/2')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // Call API Method POST
        // const dataForAPI = {
        //     name: "morpheus",
        //     job: "leader"
        // }
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        //     .then(response => response.json())
        //     .then(json => console.log('POST response: ',json))
    }, [])

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                seDataUser(json.data)
            })
    }

    const postData = () => {
        const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
            .then(response => response.json())
            .then(json => {
                setDataJob(json)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Calling API With VanillaJS</Text>
            <Button title="Get Data" onPress={getData} />
            <Text>Response GET DATA</Text>
            <Image source={{uri: dataUser.avatar}} style={styles.image} />
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <View style={styles.line} />
            <Button title="Post Data" onPress={postData} />
            <Text>Response POST DATA</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    )
}

export default CallAPIVanilla

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center',
        marginBottom: 20
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})
