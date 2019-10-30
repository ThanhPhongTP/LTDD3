import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import {FlatList,View,Text,TextInput,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Data from '../search/data/danhsach';

export default class App extends Component {
    constructor(prop)
    {
        super(prop);
        this.initData= Data;
        this.state={
            data: this.initData
        };
    }
    renderItem = ({item}) =>
    {
        return <View style={{margin :10,flex:1,flexDirection:"row"}}>
            
        <Image style={{width: 50, height: 50}}
          source={{uri: item.anh}} />
          <View style={{flexDirection:"column",flex:1,margin:1}}>
          <Text>{item.name}</Text>
            <Text>{item.gmail}</Text>
            <Text>{item.sdt}</Text>
          </View>
        </View>
    }
  render() {
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
       <Icon name="add" size={30} color="#900" />
       </View>
      </View>
        <FlatList 
        data={this.state.data}
        keyExtractor={(item)=> item.key.toString()}
        renderItem={this.renderItem}/>
        
      </View>
    );
  }
}