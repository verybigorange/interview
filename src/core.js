/* 
*   每次落子结果
*   @player 哪个玩家 （'x'或'o'）
*   @chessboard 当前棋盘的二维数组
*   @currentCoord 当前落子的坐标
*/
const chessCore = (()=>{
    // 数据缓存
    let cache = {}
   
    return ({chess})=>{
        const { player,chessboard,currentCoord } = chess;
        
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

        //没有落子坐标，跳出
        if(currentCoord.length === 0){
            return null
        }

        //查看是否有缓存的结果，直接输出缓存,没有的话进行判断，并将结果加入缓存中。
        let key = 'coord' + chessboard.toString().replace(',','');
        if(cache[key]){
            output(cache[key])
            return
        }else{
            const result = win(chess);
            cache[key] = result;
            output(result)
        }
    }
})()


/* 
*   判断哪个玩家胜利
*   @chessData 棋盘的所有数据 
*/
function win(chessData){
    
    const { player,chessboard,currentCoord } = chessData;
    let prevPlayer = (player === 'x')?'o':'x'; //正在落子的玩家

    //1、所有情况都要判断当前落子的行和列
    //2、如果落子坐标在四个角落（0,0），（0,2），（2,0），（2,2）的位置，则多判断一条对角线
    //3、如果落子坐标在中心（1,1）的位置，则多判断两条对角线

    const x = currentCoord[0];  //横坐标
    const y = currentCoord[1];  //纵坐标

    let rowResult = true //假设行条件成立
    let colResult = true //假设列条件成立

    for(let i=0;i<3;i++){
        if(chessboard[x][i] !== prevPlayer){
            rowResult = false
            //有不一样的，立即继续循环
            break;
        }
    }

    for(let i=0;i<3;i++){
        if(chessboard[i][y] !== prevPlayer){
            colResult = false;
            break;
        }
    }
    
    //如果行列有满足条件的则不进行后面的判断
    if(rowResult || colResult){
        output(player)
        return player;
    }


    const diagonal1 = [[0,0],[1,1],[2,2]]; //对角线1的全部点坐标
    const diagonal2 = [[0,2],[1,1],[2,0]]; //对角线2的全部点坐标

    const diagonal1Result  = judgeDiagonal(prevPlayer,chessboard,diagonal1);  //对角线1的判断结果
    const diagonal2Result  = judgeDiagonal(prevPlayer,chessboard,diagonal2);  //对角线2的判断结果

    if(diagonal1Result || diagonal2Result){
        output(player)
        return player;
    }
  
}

/* 
*   对角线判断
*   @player 当前的玩家 
*   @chessboard 棋盘数组
*   @diagonal 需要判断的对角线
*/
function judgeDiagonal(player,chessboard,diagonal){
    let tag = true; //假设条件先满足
    for(let i in diagonal){
        const x = diagonal[i][0];
        const y = diagonal[i][1];
        
        if(chessboard[x][y] != player){
            tag = false;
            break;
        }
    }
    return tag
}


/* 
*   输出结果
*   @result 结果 
*/
const resultDOM =  document.getElementById('result') //缓存resultDOM
function output(result){
   if(result === 'o') resultDOM.innerHTML = '黑子胜利!';
   if(result === 'x') resultDOM.innerHTML = '白子胜利!';
}

export default chessCore;


