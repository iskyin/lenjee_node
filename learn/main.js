// 回调
var cbFun=require('./01_callback/callback.js');
cbFun.toCalCulate("+",[1000,123]);
cbFun.toCalCulate("*",[1000,123]);
cbFun.toCalCulate("-",[1000,123]);
cbFun.toCalCulate("/",[1000,123]);

// 同步
var _sync=require('./02_async/sync.js');
// _sync.print();

// 异步
var _async=require('./02_async/async.js');
// _async.print();


// I/O
