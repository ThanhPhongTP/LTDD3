import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import {FlatList,View,Text,TextInput,Image,ActivityIndicator,Button,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DSNhanVien from './row_nhanvien';
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
    const {params} = this.props.navigation.state;
    return fetch('http://10.0.3.2/QLNV/nhanvien.php',{
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({Ma: params.MaPB
        }),
    })

    
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
    const {params} = this.props.navigation.state;
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
      
       </View>
      </View>
   
     <View>
      <FlatList
          data={this.state.myData}
          key 
          renderItem = {({item}) => 
          
        <View>
          

          
          < DSNhanVien manv ={item.MaNV} tennv = {item.TenNV} maphong ={item.MaPhong}></ DSNhanVien>
        
        </View>
        
          } 
          keyExtractor={(item, index) => index.toString()} 
         
        />
      </View>
      <Button title ="test" 
      onPress={() => {
    alert(params.ma);
  }}></Button>
       
      </View>
     
     
    );
  }
}