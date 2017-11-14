# node.js模块
  >> 优先级：
    > 文件模块缓存
      > 原生模块加载
        > 文件加载

## module.exports与exports的区别
  > module.exports 初始值为一个空对象 {}
  > exports 是指向的 module.exports 的引用
  > require() 返回的是 module.exports 而不是 exports
