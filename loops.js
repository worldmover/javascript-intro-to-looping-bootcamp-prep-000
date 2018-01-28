function forLoop(array){

for(let i=0; i<34; i++){
  if(i===1){
    array[1]="I am 1 strange loop."
  }
  else {
    array[i]="I am ${i} strange loops"
  }
}
return array
}
