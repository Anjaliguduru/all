var p,t,r , intr;


function find(){
    p=parseInt(document.getElementById('amount').value);
    t=parseInt(document.getElementById('time').value);

    r=parseInt(document.getElementById('rate').value);

    intr=(p*t*r)/100;
    document.getElementById("output").value=intr;

    console.log('intrest is :'+intr);
    return false;

}
var a=0;
var total=100;
var res,abc;

function percentage(){

    a=parseInt(document.getElementById('txt1').value);
    total=parseInt(document.getElementById('txt2').value);
    abc= a*total;
    res=abc/100;
    document.getElementById("result").value=res;
    console.log("percentage of a is :" +res);
    return false;



}
var num;


function odd(){
   num = parseInt(document.getElementById('abc').value);
   if ( num%2 == 0) {
   
      
      console.log('given number is even');
      document.getElementById('out-put').value = 'Even Number';
  }
  else{
     console.log('given number is odd');
     document.getElementById('out-put').value = 'Odd Number';
  }
  return false;
}