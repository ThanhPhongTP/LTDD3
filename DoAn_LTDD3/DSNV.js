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
//import SanPham from './phongban';


export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state ={
        myData:[]
    }
    this.testRef = React.createRef();
    this.rInput = React.createRef();
  }

  componentDidMount(){
    const {navigation} = this.props;
    const {params} = this.props.navigation.state;
    return fetch('http://10.0.3.2/TEST/Select_NhanVien.php',{
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
    //   onPress={()=>navigate('dsnv',{
    //     MaPB: item.MaPB,
    //     TenPB: item.TenPB,
    //      id: item.id
    //  })}
        >
        <View style={styles.row}>
          <Image source={{ uri: item.Hinh }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.TenNV}</Text>
              {/* <TouchableOpacity 
            //   onPress ={()=>navigate('del',{
            //       MaPB: item.MaPB,
            //       TenPB: item.TenPB,
            //       id: item.id
            //     })}
                 >
                <Text style={styles.mblTxt}>Modify</Text>
              </TouchableOpacity> */}
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.MaNV}</Text>
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
            return item.MaPB;
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