// canvas画棋盘
import store from './store';
import { update } from './utils';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

drawLine()  //画棋盘线

canvas.onclick = (e)=> {
    const x = e.offsetX;
    const y = e.offsetY;
   
    let coordX,coordY;
    // 点击误差为30
    if((x%70<60) && (x%70>10)){
        coordX = ~~(x/70);
    }

    if((y%70<60) && (y%70>10)){
        coordY = ~~(y/70);
    }
   
    // 如果在误差之外，则忽略
    if(coordX=='undefined' || coordY =='undefined'){
        return 
    }
    
    //更新数据
    const result = update(store,coordX,coordY);

    //如果更新数据成功且当前玩家为x
    if(result && store.chess.player === 'x'){
        drawChess(coordX*70+35,coordY*70+35,'#fff')
    }

    //如果如果更新数据成功且当前玩家为o
    if(result && store.chess.player === 'o'){
        drawChess(coordX*70+35,coordY*70+35,'#000')
    }
   
}

// 画棋盘线
export function drawLine(){
    context.beginPath();
    context.save(); 
    for(let i=1;i<3;i++){
        context.moveTo(0, 70*i);
        context.lineTo(210,70*i);
    }
    for(let i=1;i<3;i++){
        context.moveTo(70*i,0);
        context.lineTo(70*i,210);
    }
    context.fillStyle='#000';
    context.lineWidth=1;
    context.stroke();
    context.restore();
}

//画棋子
function drawChess(x,y,color){
  context.save(); 
  context.beginPath();
  context.arc(x,y,15,0,2*Math.PI);
  context.fillStyle = color;
  context.fill();
  context.restore();
}

//清空画布
export function emptyCanvas(){
    context.clearRect(0, 0, 210, 210);
}
