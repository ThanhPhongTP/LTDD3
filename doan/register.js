import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class PizzaTranslator extends Component {
  dangky(tkhoan,mkhau)
  {
    fetch('http://192.168.1.15/QLNV/register.php',{method:"POST", body:JSON.stringify({TK: tkhoan,MK: mkhau})})
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
      <View >
        <Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Đăng Ký Tài Khoản</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}>
               Tên TK : </Text>
      <TextInput 
        
        placeholder="Nhập tài khoản"
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({taikhoan: text})}
        value ={this.state.taikhoan}
        />
       
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Mật Khẩu :  </Text>
      <TextInput 
        
        placeholder="Nhập mật khẩu"
        placeholderTextColor="#000000"
        secureTextEntry
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({matkhau: text})}
        value ={this.state.matkhau}
        />
        
      </View>
      <View style={{flexDirection:"row",marginLeft : 140,padding :20}}>
      
      <Button title=" Đăng Ký " style={{width : 40}}
      onPress={() =>  this.dangky(this.state.taikhoan,this.state.matkhau)}></Button>
      </View>
     
      </View>
    );
  }
}
