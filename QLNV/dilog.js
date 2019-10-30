import React, { Component } from "react";
import { Button, Text, View ,TextInput} from "react-native";
import Modal from "react-native-modal";

 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  render() {
    return (
      <View style ={{height : 40}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}
        style={{ justifyContent:"center",height: 280,width:300,backgroundColor:"#FFFFFF"}}>
          <View >
            <Text>Hello!</Text>
            <TextInput placeholder ="ABCdsa"></TextInput>
            <Button title=" Thêm" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}