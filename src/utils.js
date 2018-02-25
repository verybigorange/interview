// 工具函数文件

/* 
* 代理
* @store 所有数据 
* @key 属性名
* @initVal 初始值
* @inform 值发生改变，通知重新计算。
*/
export function proxy(store,key,initVal,inform){
    Object.defineProperty(store,key,{
        get:()=>initVal,
        set:(newVal)=>{
            initVal = newVal;
            inform(store)
        }
    })
}


/* 
* 更新store里的数据,更新成功返回true。
* @store 所有数据 
* @x x坐标
* @y y坐标
*/
export function update(store,x,y){
   const { player,chessboard } = store.chess;

   //如果该位置不存在棋子才能落子
   if(chessboard[y][x] === 'e'){
        let newchessboard = [...chessboard];
        newchessboard[y][x] = player;
        let newplayer
        if(player === 'x'){
            newplayer = 'o'
        }else{
            newplayer = 'x'
        }

        //更新store的chess数据
        store.chess = {
            player:newplayer,
            chessboard:newchessboard,
            currentCoord:[y,x]
        }
        return true
   }else{
       return false
   }
}

/* 
* 重置棋盘数据
* @store 所有数据 
*/
export function resetChess(store){
    store.chess = {
        player:'x',     //当前初始默认的玩家
        chessboard:[    // 当前棋盘的初始默认值
            ['e','e','e'],
            ['e','e','e'],
            ['e','e','e'],
        ],
        currentCoord:[] //当前落子的位置
    } 
}