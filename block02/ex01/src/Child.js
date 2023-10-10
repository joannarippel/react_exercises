import React, {Component} from 'react'


class Child extends Component {
    render(){
        return (
            <div>
                <p>Hello {this.props.name}, I am the child component!</p>
            </div>
        )
    }
}

export default Child