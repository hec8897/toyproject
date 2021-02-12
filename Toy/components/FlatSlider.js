import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View} from 'react-native';

const flatListData = [
  {
      "key" :"1",
      "name" :"Cream Tea",
      "foodDescription" : "this is cup of cream tea",
      "imageUrl" : "https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea.jpg"
  },
  {
      "key" :"2",
      "name" :"Cream Tea",
      "foodDescription" : "this is cup of cream tea",
      "imageUrl" : "https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea.jpg"
  },
  {
      "key" :"3",
      "name" :"Cream Tea",
      "foodDescription" : "this is cup of cream tea",
      "imageUrl" : "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
  },
  {
      "key" :"4",
      "name" :"Cream Tea",
      "foodDescription" : "this is cup of cream tea",
      "imageUrl" : "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"

  },
];

class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl ,width : 300 , height: 300}}></Image>
              <Text>{this.props.item.key}</Text>
          </View>

        );
    }
}
class BasicFlatList extends Component {
    render() {
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={flatListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <FlatListItem item={item} index = {index}/>
                        );
                    }}
               />
           </View>
        );
    }
}

export default BasicFlatList;