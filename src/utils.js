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
* 对比
* @oldValue 旧的值 
* @newValue 新的值
*/
export function diff(oldValue,newValue){
    
}
