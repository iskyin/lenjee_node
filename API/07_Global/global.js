// 浏览器 -> window
// node -> global

// __filename 表示当前正在执行的脚本的文件名
//    它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同
//    如果在模块中，返回的值是模块文件的路径
console.log("当前正在运行脚本的名: ",__filename);


// __dirname 表示当前执行脚本所在的目录。
console.log("当前执行脚本所在的目录: ",__dirname);


// setTimeout(cb, ms)
//  全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//    ：setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。



// clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。
//  参数 t 是通过 setTimeout() 函数创建的定时器。



// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//  返回一个代表定时器的句柄值。
//  可以使用 clearInterval(t) 函数来清除定时器。
//  setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。


// process
//  用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
//















//
