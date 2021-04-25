import React, { Component } from 'react'
import { Button, Text, View ,Modal} from 'react-native'
import APP from '../App'

export default class Moails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible:false
    }
  }
  
  render() {
    return (
      <View>
        <Button onPress={()=>this.setState({visible:!this.state.visible})} title='打开'/>
        <Modal visible={this.state.visible} transparent={true} animationType='fade'>
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{width:'90%',height:300,backgroundColor:'greenyellow',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
              <Text>6666666</Text>
              <Button onPress={()=>this.setState({visible:!this.state.visible})} title='关闭'/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
