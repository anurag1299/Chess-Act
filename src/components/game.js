import React, { Component } from 'react'
import "../index.css"
import Board from './Board.js'
import FallenSoldierBlock from './FallenSoldierBlock.js'

import initialiseChessBoard from '../helper/initialise.js'


class game extends Component {
    constructor() {
        super()
    
        this.state = {
             squares: initialiseChessBoard(),
             whiteFallenSoldier: [],
             blackFallenSoldier: [],
             player: 1,
             sourceSelection: -1,
             status: '',
             turn: 'white'
        }
    }

    handleClick = (i) => {
        const squares = this.state.squares.slice()
        if(this.state.sourceSelection === -1){
            if(!squares[i] || squares[i].player !== this.state.player){
                this.setState({
                    status: 'Wrong Selection, please choose player '+ this.state.player + ' pieces.'
                })
                //squares[i] ? delete squares[i].style.backgroundColor: null;
                // if(squares[i])
                // {
                //     delete squares[i].style.backgroundColor
                // }
            }
            else{
                //squares[i].style = {...squares[i].style, backgroundColor : 'RGB(111,143,114)'}
                this.setState({
                    status : "Select destination for selected piece",
                    sourceSelection: i
                })
            }
        }else if(this.state.sourceSelection > -1){
            //delete squares[this.state.sourceSelection].style.backgroundColor
            //squares[this.state.sourceSelection].style = {...squares[i].style, backgroundColor : ''}
            if(squares[i] && squares[i].player === this.state.player){
                this.setState({
                    status : "Choose valid source and destination",
                    sourceSelection: -1
                })
            }
            else{
                const squares = this.state.squares.slice()
                const whiteFallenSoldier = this.state.whiteFallenSoldier.slice()
                const blackFallenSoldier = this.state.blackFallenSoldier.slice()
                const isDestEnemyOccupied = squares[i]? true : false
                const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied)
                const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i)
                const isMoveLegal = this.isMoveLegal(srcToDestPath)
    
                if(isMovePossible && isMoveLegal){
                    if(squares[i] !== null){
                        if(squares[i].player === 1){
                            whiteFallenSoldier.push(squares[i])
                        }
                        else{
                            blackFallenSoldier.push(squares[i])
                        }
                    }
                    // console.log("whiteFallenSoldier", whiteFallenSoldier)
                    // console.log("blackFallenSoldier", blackFallenSoldier)
                    squares[i] = squares[this.state.sourceSelection]
                    squares[this.state.sourceSelection] = null
                    let player = this.state.player === 1? 2 : 1
                    let turn = this.state.turn === 'white'? 'black' : 'white'
                    this.setState({
                        sourceSelection: -1,
                        squares: squares,
                        whiteFallenSoldier: whiteFallenSoldier,
                        blackFallenSoldier: blackFallenSoldier,
                        player: player,
                        status: '',
                        turn : turn
                    })
                }
                else{
                    this.setState({
                        status : 'choose valid source and destination',
                        sourceSelection: -1
                    })
                }
            }

        }

        
    }

    isMoveLegal = (srcToDestPath) => {
        let isLegal = true
        for(let i=0; i<srcToDestPath.length; i++){
            if(this.state.squares[srcToDestPath[i]] !== null){
                isLegal = false
            }
        }
        return isLegal
    }
    
    render() {
        return (
            <div>
                <div className="game">
                    <div className='game-board'>
                        <Board
                        squares = {this.state.squares}
                        onClick = {(i) => this.handleClick(i)} 
                        />
                    </div>
                    <div className="game-info">
                        <h3>Turn</h3>
                        <div id="player-turn-box" style={{backgroundColor: this.state.turn}}></div>
                        <div className="game-status">{this.state.status}</div>
                        <div className="fallen-soldier-block">
                            {<FallenSoldierBlock
                            whiteFallenSoldier = {this.state.whiteFallenSoldier}
                            blackFallenSoldier = {this.state.blackFallenSoldier} 
                            />}
                        </div>
                    </div>

                </div>

                
            </div>
        )
    }
}

export default game
