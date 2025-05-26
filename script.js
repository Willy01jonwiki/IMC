let dados = document.getElementById("dados")


dados.addEventListener("submit", function(e){
    e.preventDefault()
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let resultado = document.getElementById("resultado")
    if(altura > 3){
        altura = altura / 100
    }
    let imc = peso / (altura * altura)
    
    imc = imc.toFixed(2)

   
    if(imc < 18.5){
        resultado.textContent = `O seu IMC é ${imc} e a sua classificação é MAGREZA`
    }else if (imc < 24.9){
        resultado.textContent = `O seu IMC é ${imc} e a sua classificação é NORMAL`
        
    }else if (imc < 29.9){
       resultado.textContent = `O seu IMC é ${imc} e a sua classificação é SOBREPESO`
    }else if (imc < 39.9){
       resultado.textContent = `O seu IMC é ${imc} e a sua classificação é OBESIDADE`
    }else {
        resultado.textContent = `O seu IMC é ${imc} e a sua classificação é OBESIDADE GRAVE`
    }
})