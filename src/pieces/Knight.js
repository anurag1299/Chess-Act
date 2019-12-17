import Piece from "./piece.js"

export default class Knight extends Piece{
    constructor(player){
        super(player, (player === 1? "https://img.icons8.com/ios/50/000000/knight.png" : "https://img.icons8.com/ios-filled/50/000000/knight.png"))
    }

    isMovePossible(src, dest){
        return( src - 17 === dest ||
            src - 10 === dest ||
            src - 6 === dest ||
            src - 15 === dest ||
            src + 15 === dest ||
            src + 17 === dest ||
            src + 6 === dest ||
            src + 10 === dest )
    }

    getSrcToDestPath(){
        return [];
    }
}