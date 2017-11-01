import React, {Component} from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Text
} from 'react-vr'

import Shape from './vr/components/Shape'


export default class VRGame extends Component {

  constructor(props){
    super(props)
    this.state={
      gameShapes: [1,1,1,1]
    }
  }

  render(){
    return (
      <View>

        <Text
          style={styles.text}
        >
          Find The Odd Shape
        </Text>

        <Shape
          shapeNumber={0}
          transform={[
            {translate:[0,0,-5]}
          ]}
        />

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
