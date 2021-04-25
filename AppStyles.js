import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    navigation:{width:'100%',height:50,backgroundColor:'#e74c3c',flexDirection:'row',justifyContent:'space-evenly'},
    navigationText:{width:'40%',height:30,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:'#1abc9c',borderRadius:10},
    SView:{backgroundColor:'aliceblue'},
    map:{height:150,margin:2,flexDirection:'row'},
    mapTextView:{width:'60%',height:'100%',backgroundColor:'#ecf0f1',padding:10},
    mapText:{fontSize:20},
    mapPic:{width:'40%',height:'100%'},
    btn:{width:'50%',height:30,backgroundColor:'#3498db',borderRadius:20,color:'#f39c12',justifyContent:'center'},
    btnText:{color:'#ecf0f1',alignSelf:'center',fontSize:16},
    pokemonBackground:{width:'100%',height:150,alignItems: 'center',justifyContent:"center"},
    pokemonImg:{alignItems: 'center',justifyContent:"center",width:100,height:100}
  })
  export default styles