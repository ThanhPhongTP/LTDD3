import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

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
    const {navigate} = this.props.navigation;
    return (
      <View >
        <Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Thêm Phòng Ban Mới</Text>
        <View style={{flexDirection:"row"}}>
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
        
      </View>
      <View style={{flexDirection:"row",marginLeft : 140,padding :20}}>
      
      <Button title=" Thêm " style={{width : 40}}
      onPress={() =>  this.phongban(this.state.mapb,this.state.tenpb)}></Button>
      </View>
     
      </View>
    );
  }
}
