import React from 'react'
import '../index.css'

function square(props) {
    return (
        <button className={"square " + props.shade}
        onClick={props.onClick}
        style={props.style}></button>
        
    )
}

export default square
