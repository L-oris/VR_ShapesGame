import React, {Component} from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Text,
} from 'react-vr'


import Shape from './vr/components/Shape'


export default class VRGame extends Component {

  constructor(props){
    super(props)
    this.state={
      gameShapes: [1,1,1,1]
    }
    this.renderShapes = this.renderShapes.bind(this)
  }

  renderShapes(){
    return this.state.gameShapes.map((shape,index)=>{
      return (
        <View key={index}>
          <Shape
            shapeNumber={shape}
            colorNumber={index}
            transform={[
              {translate: [(index-1.5)*1.5,0,-5]}
            ]}
          />
        </View>
      )
    })
  }

  render(){
    return (
      <View style={styles.game}>

        <Text
          style={styles.text}
        >
          Find The Odd Shape
        </Text>

        {this.renderShapes()}

      </View>
    )
  }

}


const styles = StyleSheet.create({

  game: {
    transform: [
      {translate: [-2,0,0]}
    ]
  },

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
