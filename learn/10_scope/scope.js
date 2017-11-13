var GLOBAL="1111"
var UP="AAAA";
function print(){
  var GLOBAL="2222";
  console.log("fun -> ",GLOBAL);
  console.log("fun -> ",UP);
}
console.log("win -> ",GLOBAL);
console.log("win -> ",UP);
print();
