import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <li>
        {this.props.category}
      </li>
    )
  }
}

export default Item;