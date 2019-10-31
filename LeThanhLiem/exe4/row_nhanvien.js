import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, 
} from 'react-native';

var icon;

export default class row_nhanvien extends Component{

  render() {
    return (
      <View style={styles.product}>
          
        <View >
        <Text> Tên NV:{this.props.tennv} </Text>
          <Text> Mã NV :{this.props.manv} </Text>
          <Text>Mã Phong :{this.props.maphong}</Text>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'green',
    width: 400,
    height: 110,
    marginBottom : 10
  },

  productText: {
    marginBottom : 5,
  },

  img: {
    marginTop: -25,
    width: 50,
    height:60,
  },
  containerImg: {
    width: 100,
    height: 150,
    marginLeft: 10
  },

  containerContent: {
    marginTop:-150,
    marginLeft: 80
  },

  soLuong:{
    marginLeft: 20,
  },

  soLuongText: {
    fontSize: 10
  }, 

  giamSL: {
    backgroundColor: 'white',
    textAlign:'center', 
    borderRadius: 5

  },
  tangSL: {
    backgroundColor: 'white',
    textAlign:'center',
    borderRadius: 5
    }
});
