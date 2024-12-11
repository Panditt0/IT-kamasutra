function digitalRoot(n) {
while(n>=9){
  n = Array.from(String(n),Number).reduce((acc,ind)=> acc+ind,0)
}
return n
}


console.log(digitalRoot(123000232931));
