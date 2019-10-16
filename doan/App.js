import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';

import {FlatList,View,Text,TextInput,Image,ActivityIndicator,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SanPham from './phongban';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      myData:[]
    }
    this.testRef = React.createRef();
    this.rInput = React.createRef();
  }

  componentDidMount(){
    return fetch('http://192.168.1.15/QLNV/Select_SanPham.php')
      .then((response) => response.json())
      .then((data) => {

        this.setState({
         myData: data    
        }).done();   });
        const r = this.testRef.current;
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const {navigate} = this.props.navigation;
    return (
     
      <View >
      <View style={{flexDirection:"row"}}>
      <TextInput 
        
        placeholder="search"
        placeholderTextColor="white"
        style={{backgroundColor: '#2f363c',height : 50,fontSize : 16,padding:10,color:'white',
        borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :300,margin : 10}}
        />
       <View style={{margin :10,padding:10}}>
       <Icon name="add" size={30} color="#900" onPress={()=>navigate('thempb', {name: 'Jane'})}/>
       </View>
      </View>
      <FlatList
          data={this.state.myData}
          key 
          renderItem = {({item}) => 
        <View>
          < SanPham ma ={item.MaPB} tenphong = {item.TenPB}></SanPham>
        </View>
          } 
          keyExtractor={(item, index) => index.toString()} 
         
        />
<Button
  onPress={() =>  navigate('nhanvien', {name: 'Jane'})}
  title="Chi tiet"
/>
       
      </View>
    );
  }
}