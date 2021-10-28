//Questão 1
function fruts(fruta){
    switch(fruta){
      case "maçã":
        console.log("Não vendemos esta fruta aqui")
      break;
      case "Kiwi":
        console.log("Estamos com escassez de kiwis")
      break;
      case "melancia":
        console.log("Aqui está, são 3 reais o quilo")
      break;
      default:
        console.log("Procure o administrador do sistema!")
       break;
    }
  }

//Questão 2
function reajuste(cash){
    if(cash <= 280){
      let dinheiro = cash * 0.2
      console.log("seu salario era de " + cash + "R$, com o bonus de 20% passou a ser de " + (dinheiro + cash).toFixed(2)+"R$ aumento de "+ dinheiro+"R$")
    }
    
    else if(cash >= 280 && cash <= 700){
      let dinheiro = cash * 0.15
      console.log("seu salario era de " + cash + "R$, com o bonus de 15% passou a ser de " +(dinheiro + cash).toFixed(2)+"R$ aumento de "+ dinheiro+"R$")
    }
    
    else if(cash >= 700 && cash <= 1500){
      let dinheiro = cash * 0.10
      console.log("seu salario era de " + cash + "R$, com o bonus de 10% passou a ser de " +(dinheiro + cash).toFixed(2)+"R$ aumento de "+ dinheiro+"R$")
    }
      
     else if(cash > 1500){
       let dinheiro = cash * 0.05
       console.log("seu salario era de " + cash + "R$, com o bonus de 5% passou a ser de " +(dinheiro + cash).toFixed(2)+"R$, aumento de "+ dinheiro+"R$")
    }
}

reajuste(2800);