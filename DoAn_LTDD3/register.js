import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Image } from 'react-native';
//import { Button } from 'react-native-elements';

export default class PizzaTranslator extends Component {
  dangky(tkhoan,mkhau)
  {
    fetch('http://10.0.3.2/TEST/register.php',{method:"POST", body:JSON.stringify({TK: tkhoan,MK: mkhau})})
    .then((response)=> response.text())
    .then((responseData) =>{
      alert("Đăng Ký Thành Công")
    })
    .done()
  }
  constructor(props) {
    super(props);
    this.state = {taikhoan: '',
                  matkhau:''};
          }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Đăng Ký Tài Khoản</Text>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nhap email"
              placeholderTextColor='#455a64'
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({taikhoan: text})}
              value ={this.state.taikhoan}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/survey.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Nhap mau khau"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({matkhau: text})}
              value ={this.state.matkhau}
              placeholderTextColor='#455a64'
              // returnKeyType='go'
              secureTextEntry
              // autoCorrect={false}
              // ref={"txtPassword"}
              />
  {/* <TextInput style={styles.inputs}
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
              /> */}

          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/survey.png'}}/>
        </View>
        
      <View style={{flexDirection:"row",marginLeft : 10,padding :20}}>
      
      <Button title=" Đăng Ký " style={{width : 40}}
      onPress={() =>  this.dangky(this.state.taikhoan,this.state.matkhau)}></Button>
      </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnByRegister: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  textByRegister:{
    color:"white",
    fontWeight:'bold',
    textAlign:'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});  