/**
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
 *
 * 但在处理像TCP流或文件流时，必须使用到二进制数据。
 *  因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 *
 * 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
 *
 * Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
 *  每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
 *
 * 原始数据存储在 Buffer 类的实例中。
 *
 * 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 *
 * utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
 *
**/


// ---------------- 写入 缓冲区 ----------------
// buf.write(写入缓冲区的字符串,缓冲区开始写入的索引值(默认为0),写入的字节数(默认为 buffer.length),使用的编码(默认为 'utf8) )
// 返回值：返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
var bfStr = new Buffer(256);
bfLength=bfStr.write('lenjee',0,bfStr.length,'utf-8');
console.log("写入字节数：",bfLength);


// ---------------- 读取 缓冲区 ----------------
// buf.toString(使用的编码(默认为 'utf8'),指定开始读取的索引位置(默认为0),结束位置(默认为缓冲区的末尾))
// 返回值：解码缓冲区数据并使用指定的编码返回字符串。

var bfLt=new Buffer(26);
for(var i=0;i<26;i++){
  bfLt[i]=i+97;
}

console.log(bfLt.toString('ascii'));






















//
