const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const counter = document.getElementById("counter");
let count =0;
b3.onclick= function()
{
    count++;
    counter.textContent= count;

}
b1.onclick= function()
{
    count--;
    counter.textContent= count;
    
}
b2.onclick= function()
{
    count = 0;
    counter.textContent= count;
    
}