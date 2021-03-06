import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,ActivityIndicator,Button,
} from 'react-native';
import SanPham from './phongban';


export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state ={
        myData:[]
    }
    this.testRef = React.createRef();
    this.rInput = React.createRef();

    this.state = {
      calls: [
        {id:1,  name: "Mark Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Clark Man",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Jaden Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Srick Tree",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Erick Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Francis Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "Matilde Doe", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "John Doe",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }

  componentDidMount(){
    const {navigation} = this.props;
    return fetch('http://10.0.3.2/QLNV/Select_SanPham.php')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
         myData: data    
        }).done();  
       });
        const r = this.testRef.current;
  } 

  renderItem = ({item}) => {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    const {navigate} = this.props.navigation;
    return (
        
      <TouchableOpacity 
       onPress={()=> this.props.navigation.navigate('danhsach',{
            MaPB: item.MaPB,
            TenPB: item.TenPB,
             id: item.id
         })}
      
        >
        <View style={styles.row}>
          <Image source={{ uri: "https://img.icons8.com/color/100/000000/real-estate.png" }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.TenPB}</Text>
              <TouchableOpacity onPress ={()=>navigate('delete',{
                  ID: item.id,
                  ten: item.TenPB,
                  ma: item.MaPB,
                })}
                 >
                <Text style={styles.mblTxt}>Modify</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.MaPB}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{ flex: 1 }} >
        <View style={{flexDirection:"row"}}>
            <TextInput 
                placeholder="search"
                placeholderTextColor="white"
                style={{backgroundColor: '#2f363c',height : 50,fontSize : 16,padding:10,color:'white',
                borderBottomWidth:0.5,borderBottomColor:'#7d90a0',width :300,marginLeft: 10}}
                />

            <View style={{margin :10,padding:10}}>
                <TouchableOpacity onPress={()=>navigate('thempb', {name: 'Janea'})}>
                    <Image style={{width: 25, height: 25,}} source={{uri: 'https://img.icons8.com/android/24/000000/plus.png'}}/>
                </TouchableOpacity> 
            </View>
        </View>
       
        <FlatList 
          extraData={this.state}
          data={this.state.myData}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
     
          
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FFB300',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:170,
  },
  mblTxt: {
    fontWeight: '400',
    color: '#001EFF',
    
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});