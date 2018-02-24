// 工具函数文件


/* 
* 代理
* @store 所有数据 
* @key 属性名
* @initVal 初始值
*/
export function proxy(store,key,initVal){
    Object.defineProperty(store,key,{
        get:()=>initVal,
        set:(newVal)=>{
            initVal = newVal;
            console.log('change',initVal)
        }
    })
}

/* 
* 代理
* @oldValue 旧的值 
* @newValue 新的值
*/
export function diff(oldValue,newValue){
    
}
