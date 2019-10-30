import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class PizzaTranslator extends Component {
  phongban(manv,tennv,sdt,diachi,chucvu)
  
  {
   const {params} = this.props.navigation.state;
    fetch('http://10.0.3.2/TEST/themnhanvien.php',{method:"POST", body:JSON.stringify({Ma: manv,Ten: tennv,SDT: sdt,DC: diachi,CV: chucvu,MaPB: params.ma})})
    .then((response)=> response.text())
    .then((responseData) =>{
      alert("Đã Thêm Thành Công ")
    })
    .done()
  }
  constructor(props) {
    super(props);
    this.state = {manv: '',
                  tennv:'',
                  sdt:'',
                  diachi:'',
                  chucvu:'',
                  
                  };
          }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View >
        <Text style={{margin : 40,textAlign:"center",fontSize: 20,color:"#8B1A1A"}}>Thêm Phòng Ban Mới</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}>
               Mã NV </Text>
      <TextInput 
        
        placeholder="ma nhân viên"
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({manv: text})}
        value ={this.state.manv}
        />
       
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Tên NV </Text>
      <TextInput 
        
        placeholder="Tên nhân viên "
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({tennv: text})}
        value ={this.state.tennv}
        />
        
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            SĐT  </Text>
      <TextInput 
        
        placeholder="Số điện thoại"
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({sdt: text})}
        value ={this.state.sdt}
        />
        
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Địa Chỉ  </Text>
      <TextInput 
        
        placeholder=" Địa chỉ "
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({diachi: text})}
        value ={this.state.diachi}
        />
        
      </View>
      <View style={{flexDirection:"row"}}>
            <Text style={{margin : 10,backgroundColor :"#2F4F4F",height:40,fontSize:16,paddingTop:10,width : 90,paddingLeft:5}}> 
            Chức Vụ   </Text>
      <TextInput 
        
        placeholder=" Chức Vụ "
        placeholderTextColor="#000000"
        style={{backgroundColor: 'white',height : 40,fontSize : 16,color:'#000000',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :200,margin : 10}}
        onChangeText={(text) => this.setState({chucvu: text})}
        value ={this.state.chucvu}
        />
        
      </View>
     
      
      <View style={{flexDirection:"row",marginLeft : 140,padding :20}}>
      
      <Button title=" Thêm " style={{width : 40}}
      onPress={() =>  this.phongban(this.state.manv,this.state.tennv,this.state.sdt,this.state.diachi,this.state.chucvu)}></Button>
      </View>
     
      </View>
    );
  }
}
