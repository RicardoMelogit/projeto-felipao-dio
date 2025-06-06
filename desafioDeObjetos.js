// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )
// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

//criando uma classe
class heroiDeAventura{
  constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
  }

  //Identificando o ataque de acordo com o tipo
  tipoDeAtaque(){
    let ataque = ""
    if(this.tipo == 'guerreiro'){
      ataque = 'espada'
    }else if(this.tipo == 'mago'){
      ataque = 'magia'
    }else if(this.tipo == 'monge'){
      ataque = 'artes marciais'
    }else if(this.tipo == 'ninja'){
      ataque = 'shuriken'}

    console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
    


//Criando variáveis de entrada de dados
const nome = "Ricardo"
const idade = 40
const tipo = "guerreiro" 

//criando o heroi
let heroi = new heroiDeAventura(nome, idade, tipo,"")

//usando a função
heroi.tipoDeAtaque()



