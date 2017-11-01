import React, {Component} from 'react'
import {
  Box,
  Sphere,
  Cylinder
} from 'react-vr'


const shapes = [Box,Sphere,Cylinder]


export default class Shape extends Component {

  render(){
    let ShapeComponent = shapes[this.props.shapeNumber]
    
    return (
      <ShapeComponent
        style={{
          color: 'white',
          transform: this.props.transform
        }}
      />
    )
  }

}
