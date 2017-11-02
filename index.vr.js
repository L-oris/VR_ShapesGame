import React, {Component} from 'react'
import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from 'react-vr'


import Shape, {shapes} from './vr/components/Shape'


export default class VRGame extends Component {

  constructor(props){
    super(props)
    this.state={
      gameShapes: [1,1,1,1],
      specialIndex: 0,
      score: 0
    }
    this.renderShapes = this.renderShapes.bind(this)
    this.newGameSet = this.newGameSet.bind(this)
  }

  componentDidMount(){

    AsyncStorage.getItem('score')
    .then(value=>{
      console.log(`score --> ${value}`);
      this.setState({score: value})
    })

    this.newGameSet()
  }

  newGameSet(){
    const baseShapeId = Math.floor(Math.random()*shapes.length)

    let specialShapeId = baseShapeId
    while(specialShapeId===baseShapeId){
      specialShapeId = Math.floor(Math.random()*shapes.length)
    }

    const newGameShapes = []
    for(let i=0;i<this.state.gameShapes.length;i++){
      newGameShapes.push(baseShapeId)
    }

    const specialIndex = Math.floor(Math.random()*newGameShapes.length)

    newGameShapes[specialIndex] = specialShapeId

    this.setState({
      gameShapes: newGameShapes,
      specialIndex
    })
  }

  pickShape(shapeIndex){
    let {specialIndex,score} = this.state

    shapeIndex===specialIndex
    ? score += 1
    : score -= 1

    this.setState({
      score
    })

    AsyncStorage.setItem('score',score)

    //start new game
    this.newGameSet()

  }

  renderShapes(){
    return this.state.gameShapes.map((shape,index)=>{
      return (
        <View key={index} onEnter={e=>this.pickShape(index)}>
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

        <Text style={styles.text}>
          Find The Odd Shape
        </Text>

        <Text style={styles.text}>
          Score: {this.state.score}
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
      {translate:[0,1,-3]}
    ]
  }

})


AppRegistry.registerComponent('VRGame',()=>VRGame)
