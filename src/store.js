import { proxy } from './utils'
import getCoord from './core';

const store = {}

// 当前棋盘的初始默认值
let chessboard =  [
    ['e','e','e'],
    ['e','e','e'],
    ['e','e','e'],
]

//当前初始默认的玩家
let player = 'x';

proxy(store,'chessboard',chessboard,getCoord)
proxy(store,'player',player,getCoord)

export default store;




