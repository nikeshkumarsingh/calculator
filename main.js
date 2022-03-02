const res1= require("./add")
console.log("Add:",res1)
const res2= require("./div")
console.log("division:",res2);
const res3= require("./sub")
console.log("subtract:",res3);
const res4= require("./mult");
console.log("multiplication:",res4);
const ans= res1*res2/res3-res4;
console.log(ans)