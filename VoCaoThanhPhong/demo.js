import React, { Component } from 'react';
import { Alert, Button, TextInput, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    // bigBlue: {
    //   color: 'blue',
    //   fontWeight: 'bold',
    //   fontSize: 30,
    // },
    txt: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor:'yellow',
    },
    imageStyle:{
        width: 200, height: 200,
        marginBottom:20,
        marginTop:20,
        // borderTopLeftRadius:100,
        // borderTopRightRadius:100,
        // borderBottomLeftRadius:100,
        // borderBottomRightRadius:100,
        borderRadius: 100
      },
      container: {
        flex: 1,
        justifyContent: 'center',
       },
       buttonContainer: {
         margin: 20
       },
       alternativeLayoutButtonContainer: {
         margin: 20,
         flexDirection: 'row',
         justifyContent: 'space-between'
       }
  });

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style = {styles.txt}>Hello {this.props.name}!</Text>
        <Text> Lập trình di động 3</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b : '', s: 0};
    
    //this.state = {b: ''};
  }

  Tong(){
    const{a,b} = this.state
    const soA = parseFloat(a)
    const soB = parseFloat(b)
    //let s = 0;
    s = soA + soB

  }
  
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>

        <Greeting name='class' />
        <Greeting name='every one' />
        
        <TextInput
          style={{height: 40, bottom: 10, top: 10}}
          placeholder="Nhập a"
          value={this.state.a}
          onChangeText={(a) => this.setState({a})}
          
          //var a = {this.state.text}
        />
       
        <TextInput
          style={{height: 40, bottom: 10, top: 10}}
          placeholder="Nhập b"
          onChangeText={(b) => this.setState({b})}
          value={this.state.b}
          //var b = {this.state.text}
        />
        
        <View style={styles.buttonContainer}>
          
          <Button 
          onPress ={() => {

            Alert.alert('Tổng:', (a + b))
          }}
          title="Submit"
          color='red'/>
        </View>
        
        <Image style={styles.imageStyle}
          source={{uri: 'https://cungdev.com/wp-content/uploads/2018/02/bg_android.png'}}>
        </Image>
        
      </View>
      
    );
  }
}
