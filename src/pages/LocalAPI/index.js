import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Item = ({ name, email, role, onPress, onDelete }) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: 'https://img2.pngdownload.id/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg' }} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descName}>{name}</Text>
                <Text style={styles.descEmail}>{email}</Text>
                <Text style={styles.descRole}>{role}</Text>
            </View>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const LocalAPI = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [users, setUsers] = useState([]);
    const [button, setButton] = useState('Simpan');
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getData();
    }, [])

    const submit = () => {
        const data = {
            name: name,
            email: email,
            role: role
        }
        if (button === 'Simpan') {
            axios.post('http://10.0.2.2:3004/users', data)
                .then(res => {
                    console.log('res: ', res);
                    setName('');
                    setEmail('');
                    setRole('');
                    getData();
                })
        } else if (button === 'Update') {
            axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
                .then(res => {
                    console.log('res: ', res);
                    setName('');
                    setEmail('');
                    setRole('');
                    getData();
                    setButton('Simpan');
                })
        }
    }

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
            .then(res => {
                setUsers(res.data);
            })
    }

    const selectItem = (item) => {
        console.log('selected item: ', item);
        setSelectedUser(item);
        setName(item.name);
        setEmail(item.email);
        setRole(item.role);
        setButton('Update');
    }

    const deleteItem = (item) => {
        console.log('delete item: ', item);
        axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
            .then(res => {
                console.log('res: ', res);
                getData();
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON SERVER)</Text>
            <Text style={styles.textTitle}>Biodata</Text>
            <TextInput placeholder="Nama" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Role" style={styles.input} value={role} onChangeText={(value) => setRole(value)} />
            <Button title={button} onPress={submit} />
            <View style={styles.line} />
            {users.map(user => {
                return (
                    <Item
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        role={user.role}
                        onPress={() => selectItem(user)}
                        onDelete={() => Alert.alert(
                            'Peringatan!',
                            'Apakah anda yakin menghapus data ini?',
                            [
                                {
                                    text: 'Tidak', 
                                    onPress: () => console.log('button tidak')
                                },
                                {
                                    text: 'Ya', 
                                    onPress: () => deleteItem(user)
                                }
                            ]
                        )} />
                )
            })}
        </View>
    )
}

export default LocalAPI

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
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 8,
        width: 345,
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#d35400'
    },
    desc: {
        flexDirection: 'column',
        marginLeft: 10,
        flex: 1
    },
    descName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descEmail: {
        fontSize: 14
    },
    descRole: {
        fontSize: 12,
        marginTop: 8
    },
    delete: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
})
