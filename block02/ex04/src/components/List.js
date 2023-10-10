import React from 'react'
import Item from './Item'

function List(props){
    return(
        <ul>
        {props.categories.map((category, index) => <Item key={index} category={category} />)}
        </ul>
    )
}

export default List;