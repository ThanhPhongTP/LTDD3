
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
  FlatList
} from 'react-native';


export default class ProfileDetail extends Component {
  
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
        return fetch('http://10.0.3.2/TEST/hosonv.php',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({Ma: params.Ma
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
  
    return (
      <ScrollView>
        <View style={styles.container}>
           

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Nội Dung</Text>   
           <View style={{flex:1,flexDirection:'row'}}>
               <Text> Công Ty Đã Làm Việc : </Text>
                <Text> {item.CongTy}</Text>
               </View>   
               <View style={{flex:1,flexDirection:'row'}}>
               <Text> Thời Gian Làm Việc  : </Text>
                <Text> {item.ThoiGian}</Text>
                <Text> Tháng </Text>
               </View>   
            
          </View>

          
          
        
        </View>
      </ScrollView>
    );
  }
  render() {
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    return(
      <View style={{ flex: 1 }} >
       <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={{uri:params.Anh}} />
            <Text  style={styles.name}>{params.Ten}</Text>
          </View>
        <FlatList 
          extraData={this.state}
          data={this.state.myData}
          keyExtractor = {(item) => {
            return item.ThoiGian;
          }}
          renderItem={this.renderItem}/>
          
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor : "#DCDCDC"
  },
  cardTittle:{
    color:"#808080",
    fontSize:22,
    marginBottom:5,
  },
  avatar:{
    width:150,
    height:150,
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:5,
    height:100,
    marginTop:5,
  },
  profileCard:{
    height:200,
    alignItems: 'center',
    marginTop:5,
  },
  name:{
    marginTop:10,
    fontSize:22,
    color:"#808080",
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard:{
    marginTop:10,
  },
  photo:{
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
  }
});
 