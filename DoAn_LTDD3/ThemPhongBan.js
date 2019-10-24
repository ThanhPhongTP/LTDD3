import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Image } from 'react-native';
//import { Button } from 'react-native-elements';

export default class PizzaTranslator extends Component {
  phongban(mapb,tenpb)
  {
    fetch('http://10.0.3.2/TEST/Insert_SanPham.php',{method:"POST", body:JSON.stringify({Ma: mapb,Ten: tenpb})})
    .then((response)=> response.text())
    .then((responseData) =>{
      alert("Da nhap Thanh Cong")
    })
    .done()
  }
  constructor(props) {
    super(props);
    this.state = {mapb: '',
                  tenpb:''};
          }

  render() {
    return (
      <View style={styles.container}>
<Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Thêm Phòng Ban Mới</Text>
{/* <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/8/" }}/> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Ma Phong"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({mapb: text})}
              value ={this.state.mapb}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/survey.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Ten Phong"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({tenpb: text})}
        value ={this.state.tenpb}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/bubbles/50/000000/survey.png'}}/>
        </View>

        
        {/* <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}>
               Mã Phòng</Text>

      <TextInput 
        placeholder="ma phòng ban"
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({mapb: text})}
        value ={this.state.mapb}
        />
       
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Tên Phòng </Text>
      <TextInput 
        
        placeholder="Tên phòng Ban"
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({tenpb: text})}
        value ={this.state.tenpb}
        />
        
      </View> */}
      <View style={{flexDirection:"row",marginLeft : 10,padding :20}}>
        <Button title=" Thêm " style={{width : 40}}
        onPress={() =>  this.phongban(this.state.mapb,this.state.tenpb)}></Button>
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