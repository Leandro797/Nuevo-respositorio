function sumar (...operandos){ //... se le agrega para que sea una lista de parametros
    operandos.reduce((res,elem) =>{
        return Number(res) + Number(elem);
 }); // 13+5 = 18
 }
 function restar (pepitoA, pepitoB){
     return pepitoA-pepitoB; // 13+5 = 18
  }
  function multiplicar (pepitoA, pepitoB){
     return pepitoA*pepitoB; // 13+5 = 18
  }
  function dividir (pepitoA, pepitoB){
     return pepitoA/pepitoB; // 13+5 = 18
  }

  
  module. exports = {}
      'sumar': sumar,
      'restar':restar,
      'multiplicar':multiplicar,
      'dividir':dividir,
}