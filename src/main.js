// 入口文件
import store from './store';
import { drawLine,emptyCanvas } from './canvas';
import { resetChess } from './utils'

// 重置按钮
document.getElementById('reset').onclick = ()=>{
    resetChess(store); //重置数据
    emptyCanvas();   //重置画布
    document.getElementById('result').innerHTML = "比赛中";
    drawLine();    //画棋盘
}

