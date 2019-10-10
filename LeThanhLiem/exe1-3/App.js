import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.operations = ['D','+', '-', '*', '/']
  }

  calculateResult(){
    const text = this.state.resultText

    console.log(text, eval(text))
    this.setState({
      calculationText: eval(text)
    })
    
  }

  validate(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false
    }
    return true
  }

  buttonPressed(text){
      console.log(text);

      if (text == '='){
        return this.validate() && this.calculateResult();
      }

      this.setState({
        resultText: this.state.resultText + text
      })
  }

 operate(operation){
   switch(operation){
      case 'D':
        console.log(this.state.result)
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case 'x':
      case '/':
        const lastchar = this.state.resultText.split('').pop()
        
        if(this.operations.indexOf(lastchar) > 0) return

        if (this.state.resultText == "" ) return
        this.setState({
          resultText: this.state.resultText + operation
        })
   }
 }

  render() {

    let elems = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,"="]]
    for (let i = 0; i < 4 ; i++){
      let row = []
      for (let j = 0; j < 3;j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style = {styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      elems.push(<View key={i} style={styles.row}>{row}</View>)
    }

    
    let ops = []
    for (let i = 0; i < 5; i++){
      ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
        <Text style={styles.btnText}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (
      <View style = {styles.container}>
        <View style = {styles.result}>
          <Text style = {styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style = {styles.calculation}>
          <Text style = {styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style = {styles.buttons}>
            <View style = {styles.number}>
              {elems}
            </View>
            <View style = {styles.operation}>
                {ops}
            </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    row:{
      flexDirection:'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems:'stretch'
    },
    btnText:{
      fontSize: 25
    },
    btn:{
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    result: {
      flex: 2,
      backgroundColor: 'black',
      justifyContent:"center",
      alignItems:"flex-end"
    },
    resultText:{
      fontSize:20,
      color:'white'
    },
    calculation:{
      flex: 1,
      backgroundColor:'black',
      justifyContent:"center",
      alignItems:"flex-end"
    },
    calculationText:{
      fontSize: 20,
      color: 'white',
    },
    buttons:{
      flex: 7,
      flexDirection: 'row'
    },
    number:{
      flex: 3,
      backgroundColor:'gray',
      color:'white'
    },
    operation:{
      flex: 1,
      color:'white',
      backgroundColor:'brown',
      justifyContent: 'space-around',
      alignItems:'stretch'
    }

});
