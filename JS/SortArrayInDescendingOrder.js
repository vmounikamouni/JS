var input=[5,9,8,7,5]
for (var i = 0; i < input.length; i++) {
   if( input[i]<input[i+1])
   {
     var temp=input[i];
     input[i]=input[i+1];
     input[i+1]=temp;
   }    
    
}
console.log(input)