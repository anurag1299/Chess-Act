import Piece from "./piece.js"

export default class Rook extends Piece{
    constructor(player){
        super(player, (player === 1? "https://img.icons8.com/ios/50/000000/rook.png" : "https://img.icons8.com/ios-filled/50/000000/rook.png"))
    }

    isMovePossible(src, dest){
        let mod = src % 8
        let diff = 8 - mod
        
        return(Math.abs(src-dest)%8 === 0 || (dest > (src-mod) && dest < (src + diff)))
    }

    getSrcToDestPath(src, dest){
        let path = [], pathStart, pathEnd, increment
        if(src>dest){
            pathStart = dest
            pathEnd = src
        }
        else{
            pathStart = src
            pathEnd = dest
        }
        if(Math.abs(src-dest)%8 === 0){
            increment = 8
            pathStart += 8
        }
        else{
            increment = 1
            pathStart += 1
        }

        for(let i = pathStart; i < pathEnd; i+=increment)
        {
            path.push(i)
        }
        return path
    }
}