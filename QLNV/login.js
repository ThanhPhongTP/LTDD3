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
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#1c313a" />
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback style={styles.container}
                        onPress={Keyboard.dismiss}>

                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{ uri: 'https://img.icons8.com/bubbles/200/000000/android-os.png' }}>
                                </Image>
                                <Text style={styles.title}></Text>
                            </View>
                            <View style={styles.infoContainer}>
                                {/* <TextInput style={styles.inputs}
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
                                /> */}

<View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            value={this.state.username}
              placeholder="Email"
              placeholderTextColor='#455a64'
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}
            returnKeyType='next'
            autoCorrect={false}
            onSubmitEditing={() => this.refs.txtPassword.focus()}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
</View>
<View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
          value={this.state.password}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}
              
              placeholderTextColor='#455a64'
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false}
                ref={"txtPassword"}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
</View>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()} >
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() =>navigate('dk', {name: 'Jane'})} >
                                    <Text style={styles.buttonText}>REGINTER</Text>
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
        fetch('http://10.0.3.2/TEST/login.php', {
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
                    navigate('dspb', {name: 'Jane'});
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
        flex:1,
        // backgroundColor: 'rgb(32, 53, 70)', 
        backgroundColor: "#3E23D7",
        flexDirection: 'column',

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#3E23D7'
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
        marginBottom: 250
    },
    infoContainer: {
        marginBottom: 150,
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
        backgroundColor: '#07C2AC',
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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
    
        shadowColor: "#808080",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },
      inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
      },

})