import React, {Component} from 'react'
import {
  Box,
  Sphere,
  Cylinder
} from 'react-vr'


const shapes = [Box,Sphere,Cylinder]
const colors = ['red','green','blue','#ccc']


export default class Shape extends Component {

  render(){
    let ShapeComponent = shapes[this.props.shapeNumber]

    return (
      <ShapeComponent
        style={{
          color: colors[this.props.colorNumber],
          transform: this.props.transform
        }}
      />
    )
  }

}
