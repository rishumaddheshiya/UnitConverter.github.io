
console.log(2);
const f=document.getElementById("f");
const c=document.getElementById("c");

f.oninput=function(){
let m = ((parseFloat(
    f.value) - 32) * 5) / 9;
c.value = parseFloat(m.toFixed(2));

}
 
c.oninput=function(){
    let n = (parseFloat(c.value) * 9) / 5 + 32;
    f.value = parseFloat(n.toFixed(2));
 }