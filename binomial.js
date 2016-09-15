function factorial(param) {
  var ans = 1;
  for (let i = 1; i < param+1; i++) {
    ans = ans * i;
  }
    return ans;
}

function mult_n(param1,param2) {
    var counter = param2 - 1;
    var ans = 1;
    for (let i = 0; i < counter; i++) {
      ans = ans*(param1-i);
    }
    return ans;
}

window.alert("Format is (1 + x)^n");
var x = 1/prompt("Value of x");
var n = prompt("Value of n");
console.log(x);
console.log(n);

var result = 1;
for (let i = 1; i < 100; i++) {
  result = result + (mult_n(n,i+1)*Math.pow(x,i))/factorial(i);
}
result = result*Math.pow(1/x,n);
document.getElementById("xxx").innerHTML = result;
