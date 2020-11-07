crescente()
function crescente(){
    numeros = [213,532,123,764,879,234,456]
    for(let i=0; i<numeros.length; i++){
        for(let j=i+1; j<numeros.length; j++){
            if(numeros[j] < numeros[i]){
                atual = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = atual
            }
        }
    }
    console.log("Números organizados em ordem crescente: "+numeros)
}