/* 
*   返回获胜坐标
*   @player 哪个玩家 （'x'或'o'）
*   @chessboard 当前棋盘的二维数组
*/
const getCoord = (()=>{
    // 数据缓存
    let cache = {}
    
    return (store)=>{
        const {player,chessboard} = store;
    
         //玩家检测
        if(player !== 'x' && player !=='o'){
            alert("player error! It can only be x or o");
            return null
        }

        //棋盘检测
        if(Object.prototype.toString.call(chessboard).slice(8,-1).toLowerCase() !== 'array'){
            alert("chessboard error! It can only be an array");
            return null
        }

        //查看是否有缓存的数据，有则返回。
        let key = 'coord' + chessboard.toString().replace(',','');
        if(cache[key]){
            return cache[key]
        }

        //根据不同的玩家返回不同的胜利的坐标。
        switch(player){
            case 'x':
                break;
            case 'o':
                break
        }
    }
})()

export default getCoord;