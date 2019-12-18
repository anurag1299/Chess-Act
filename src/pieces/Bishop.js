import Piece from './piece.js'

export default class Bishop extends Piece{
    constructor(player){
        super(player, (player === 1? "https://img.icons8.com/ios/40/000000/bishop.png" : "https://img.icons8.com/ios-filled/40/000000/bishop.png"))
    }

    isMovePossible(src, dest){
        return(Math.abs(src-dest)%9 === 0 || Math.abs(src-dest)%7 === 0)
    }

    getSrcToDestPath(src, dest){
        let path =[], pathStart, pathEnd, increment
        if(src>dest){
            pathStart = dest
            pathEnd = src
        }
        else{
            pathEnd = dest
            pathStart = src
        }
        if(Math.abs(src-dest)%9 === 0){
            increment = 9
            pathStart += 9
        }
        else{
            increment = 7

            pathStart += 7
        }

        for(let i = pathStart; i < pathEnd; i+=increment)
        {
            path.push(i)
        }
        return path
    }
}