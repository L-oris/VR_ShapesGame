import React, {Component} from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Text
} from 'react-vr'


export default class VRGame extends Component {

  render(){
    return (
      <View>

        <Text
          style={styles.text}
        >
          Find The Odd Shape
        </Text>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: 'white',
    transform: [
      {translate:[0,0.5,-3]}
    ]
  }
})


AppRegistry.registerComponent('VRGame',()=>VRGame)
