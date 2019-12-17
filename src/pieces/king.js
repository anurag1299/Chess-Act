import Piece from './piece.js'

export default class King extends Piece{
    constructor(player){
        super(player, (player === 1? "https://img.icons8.com/ios/50/000000/queen.png" : "https://img.icons8.com/ios-filled/50/000000/queen.png"))
    }

    isMovePossible(src,dest){
        return (src-9 === dest ||
            src - 8 === dest ||
            src - 7 === dest ||
            src - 1 === dest ||
            src + 1 === dest ||
            src + 7 === dest ||
            src + 8 === dest ||
            src + 9 === dest )
    }


    getSrcToDestPath(src,dest){
        return []
    }
}