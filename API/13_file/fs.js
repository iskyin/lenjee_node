/**
 *
 * Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本
 *  异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
 *
**/

var fs=require('fs');





// 打开文件
//   fs.open(path, flags[, mode], callback)
//     path - 文件的路径。
//     flags - 文件打开的行为。具体值详见下文。
//     mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
//     callback - 回调函数，带有两个参数如：callback(err, fd)。


// 获取文件信息
//   fs.stat(path, callback)
//   path - 文件路径。
//   callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
//   fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
//     可以通过stats类中的提供方法判断文件的相关属性
//   stats.isFile()	如果是文件返回 true，否则返回 false。
//   stats.isDirectory()	如果是目录返回 true，否则返回 false。
//   stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
//   stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
//   stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
//   stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
//   stats.isSocket()	如果是 Socket 返回 true，否则返回 false。


// 写入文件
//   fs.writeFile(file, data[, options], callback)
//     file - 文件名或文件描述符。
//     data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
//     options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
//     callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。



// 读取文件
//   fs.read(fd, buffer, offset, length, position, callback)
//     fd - 通过 fs.open() 方法返回的文件描述符。
//     buffer - 数据写入的缓冲区。
//     offset - 缓冲区写入的写入偏移量。
//     length - 要从文件中读取的字节数。
//     position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
//     callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。


// 关闭文件
//   异步模式下关闭文件
//   fs.close(fd, callback)
//     fd - 通过 fs.open() 方法返回的文件描述符。
//     callback - 回调函数，没有参数。
















//
