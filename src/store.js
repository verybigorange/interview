import { proxy } from './utils'
import chessCore from './core';

const store = {}


const chess ={
    player:'x',     //当前初始默认的玩家
    chessboard:[    // 当前棋盘的初始默认值
        ['e','e','e'],
        ['e','e','e'],
        ['e','e','e'],
    ],
    currentCoord:[] //当前落子的位置
} 

// 监听store的chess属性，如果被更改则运行chessCore。
proxy(store,'chess',chess,chessCore)

export default store;




