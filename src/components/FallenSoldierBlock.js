import React, { Component } from 'react'
import '../index.css'
import Square from './square.js'

class FallenSoldierBlock extends Component {
    renderSquare(square,i,squareShade){
        return <Square 
        piece = {square}
        style = {square.style} />
    }
    
    render() {
        return (
            <div>
            <div className="board-row">{this.props.whiteFallenSoldier.map((ws,index) => this.renderSquare(ws, index))}</div>
            <div className="board-row">{this.props.blackFallenSoldier.map((bs,index) => this.renderSquare(bs, index))}</div>    
            </div>

        )
    }
}

export default FallenSoldierBlock
