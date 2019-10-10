import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ToolbarAndroid
} from 'react-native'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",

        };
    }

    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#1c313a" />
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback style={styles.container}
                        onPress={Keyboard.dismiss}>

                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png' }}>
                                </Image>
                                <Text style={styles.title}>Login</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    value={this.state.username}
                                    onChangeText={username => this.setState({ username })}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='#455a64'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    placeholder="Enter password"
                                    placeholderTextColor='#455a64'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()} >
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>

                                
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }


    login() {
        const {navigate} = this.props.navigation;
        fetch('http://172.16.0.119/QLNV/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == "true") {
                    navigate('phongban', {name: 'Jane'});
                } else {
                    alert("Login Failed");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        // backgroundColor: 'rgb(32, 53, 70)', 
        backgroundColor: "#455a64",
        flexDirection: 'column',

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#455a64'
    },
    logo: {
        width: 128,
        height: 120,

    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
        marginBottom: 150
    },
    infoContainer: {
        marginBottom: 70,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        marginBottom: 20,
        height: 40,
        color: '#775da9',
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        fontSize: 15
    },
    buttonContainer: {
        backgroundColor: '#6193ab',
        paddingVertical: 15,
        borderRadius: 30,
        height: 50,
        marginBottom: 20

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    hello: {
        marginTop: 450
    }

})
