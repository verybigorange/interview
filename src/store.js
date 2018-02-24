import { proxy } from './utils'

const store = {}

// 当前棋盘的默认值
const chessboard =  [
    ['e','e','e'],
    ['e','e','e'],
    ['e','e','e'],
]

proxy(store,'chessboard',chessboard)

export default store;




