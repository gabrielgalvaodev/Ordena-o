const numeros = [0,9,8,7,6,5,3,4,3,2,1,3,4,6,4,5,7,5,9,8];

 numeros.sort((a,b) => a - b);

 console.log(numeros);

 numeros.sort((a,b) => b - a);
    
 console.log(numeros);
 