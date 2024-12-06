let pessoas = [
    {
        nome: "Ana",
        idade: 28,             
        profissao:"Engenharia"
    },
    {
        nome: "Carlos",
        idade: 35,
        profissao:"Professor"
    },
    {
        nome: "Ana",               
        idade: 28,                  
        profissao:"Engenharia"     
    }
  ]
  
  for(const pessoa of pessoas){
    for(const chaves in pessoa){
        console.log(chaves + ":" + pessoa[chaves])
    }
  }