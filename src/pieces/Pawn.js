import Piece from "./piece.js"

export default class Pawn extends Piece {
    constructor(player){
        super(player, (player === 1? "https://img.icons8.com/ios/48/000000/pawn.png" : "https://img.icons8.com/ios-filled/50/000000/pawn.png"))
        this.initialPositions = {
            1: [48,49,50,51,52,53,54,55],
            2: [8,9,10,11,12,13,14,15]
        }
    }

    isMovePossible(src, dest, isDestEnemyOccupied){
        if(this.player === 1){
            if((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)){
                return true
            }
            else if(isDestEnemyOccupied && (dest === src - 9 || dest === src -7)){
                return true
            }
        
        }else if(this.player === 2){
            if((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)){
                return true
            }
            else if(isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)){
                return true
            }
        }
        return false
    }


    getSrcToDestPath(src, dest){
        if(dest === src -16){
            return [src - 8]
        }else if(dest === src +16){
            return [src + 8]
        }
        return []
    }
}