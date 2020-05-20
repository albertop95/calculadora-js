function calcular(tipo, valor){

       var resultado = document.getElementById("resultado")
       if(tipo == 'acao'){
          
          if(valor == 'c'){
            //limpar o ecra resultado
            resultado.value = ''
          }

          if(valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '.'){
            resultado.value += valor
          }

          if (valor == '='){
            valorResultado = resultado.value
            resultado.value = eval(valorResultado)
          }
       }
       else if(tipo == 'valor'){
          resultado.value += valor   
       }

      }