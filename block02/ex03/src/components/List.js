import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  render() {
    return (      
        <ul>
          {this.props.categories.map((category, index) => {
            return(
             <Item key={index} category={category} />
            )
          })}
        </ul>
      
    )
  }
}

export default List;