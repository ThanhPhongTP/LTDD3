import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: props.navigation.getParam('id', 'NO-ID'),
      // MaPB: props.navigation.getParam('MaPB', 'NO-NAME'),

      // TenPB: props.navigation.getParam('TenPB', 'NoName'),
    //   mapb: '',
    //   tenpb:'',
  
      ActivityIndicator_Loading: false,
    };
  }
  Xoa = () => {
    const {params} = this.props.navigation.state;
    Alert.alert(
        'Alert',
        'Are you sure you want to delete?',
        [
        {
            text: 'No',
            onPress: () => console.log('Cancel pressed'),
            style: 'cancel',
        },
        {
            text: 'Yes',
            onPress: () => {
            fetch('http://10.0.3.2/TEST/xoanhanvien.php', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ma: params.manv
                }),
            })
                .then(response => response.json())
                .then(responseJsonFromServer => {
                alert(responseJsonFromServer);
                this.setState({ActivityIndicator_Loading: false});
                this.props.navigation.goBack();
                })
                .catch(error => {
                console.error(error);
                });
            },
        },
        ],
        {cancelable: true},
    );
    };
  render() {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri:params.anh }}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.info}>{params.tennv}</Text>
           
              <Text style={styles.name}>{params.manv}</Text>
              <Text style={styles.description}>{params.maphong}</Text>
              <Text style={styles.description}>{params.sdt}</Text>
              <Text style={styles.description}>{params.diachi}</Text>
              <Text style={styles.description}>{params.chucvu}</Text>
              
              <TouchableOpacity style={styles.MoTaCT}
              onPress={() =>navigate('mota', {
                
                 Ma: params.manv,
                 Anh:params.anh,
                 Ten:params.tennv})}>
              <Text >{params.mota}</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.buttonContainer}
               onPress={this.Xoa}
               >
                <Text>Xóa</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Sửa</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:70,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:20
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:17,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
    height:20,
    
  },
  description:{
    fontSize:16,
    color: "#696969",
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  MoTaCT: {
    fontWeight: '400',
    color: '#001EFF',
    height:20,
    fontSize: 13,
  },
  row: {
    flexDirection:'row',
    flex:1,
    height:20,
  },
});
 