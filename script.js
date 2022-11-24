var n1, primo;
n1 = parseInt(prompt("Introduce un numero para saber si es primo o no"));
i = 0;
primo = true;
if(n1 == 1 || n1 == 0){
    alert("El numero " + n1 + " no es primo")
} else{
    
    if (Math.sign(n1) == 1){
        
        for( i = 2 ; i < n1; i++){
            console.log(i)
            if(n1 % i == 0) {
            primo = false;
            }
        }

        if (primo == true){
            alert("El numero " + n1 + " es primo")
        }   else{
            alert("El numero " + n1 + " no es primo")
        }

        // if (primo == true){
        //     document.write("El numero " + n1 + " es primo")
        // }   else{
        //     document.write("El numero " + n1 + " no es primo")
        // }
    } else if (Math.sign(n1) == -1 || Math.sign(n1) == -0){
        alert("El numero " + n1 + " no es primo")
    } else{
        alert("Coloca un numero")
    }
}