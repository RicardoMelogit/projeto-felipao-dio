//Criar um código que exiba uma mensagem 
//com o nome do herói, o nível do herói, 
// o sexo do herói, a idade do herói e a 
// quantidade de pontos de XP do herói.

// Nas linha 80,81,82 e 83, são criadas 
// variáveis para mostrar separadamente 
// o nome, sexo, idade e xp de cada herói.

//No código abaixo são criadas variáveis para armazenar os dados de cada herói.
let nome = ["Wolverine", "Tempestade", "Vampira", "Jubileu", "Jean Grey", "Ciclope", "Gambit", "Fera", "Professor Xavier"]
let sexo = ["Masculino", "Feminino"]
let idade = [120, 35, 25, 15, 32, 34, 30, 37, 60 ]
let xp = [9350, 8562, 7568, 952, 20000, 8555, 6580, 4500, 11000]
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let vazio = "verificar"

//Aqui cada herói e suas informações são armazenadas em uma variável.
let wolverine  = [nome[0], sexo[0], idade[0], xp[0], vazio]
let tempestade = [nome[1], sexo[1], idade[1], xp[1], vazio]
let vampira    = [nome[2], sexo[1], idade[2], xp[2], vazio]
let jubileu    = [nome[3], sexo[1], idade[3], xp[3], vazio]
let fera       = [nome[7], sexo[0], idade[7], xp[6], vazio]
let jeanGrey   = [nome[4], sexo[1], idade[4], xp[4], vazio]
let ciclope    = [nome[5], sexo[0], idade[5], xp[5], vazio]
let gambit     = [nome[6], sexo[0], idade[6], xp[7], vazio]
let professorX = [nome[8], sexo[0], idade[8], xp[8], vazio]

//Aqui os heróis são armazenados em um array.
let timeXMem =[wolverine, tempestade, vampira, jubileu, fera, jeanGrey, ciclope, gambit, professorX]

//Aqui é criada uma variável para armazenar 
// os dados de cada herói para ser feita a 
// verificção de nivel de acordo com a quantidade de XP .
let xMen =""
 //Esse laço de repetição verifica 
 // a quantidade de XP de cada herói 
 // e atribui um nível de acordo com 
 // a quantidade de XP e também exibe
 // uma mensagem com dados completos de cada herói.
for(let i = 0; i < timeXMem.length; i++){
    xMen = timeXMem[0+i]
    if((xMen[3] >= 1) && (xMen[3] <= 1000)){
        xMen[4] = nivel[0]
        console.log(xMen)
    }else if((xMen[3] >= 1001) && (xMen[3] <= 2000)){
        xMen[4]= nivel[1]
        console.log(xMen)

    }else if((xMen[3] >= 2001) && (xMen[3] <= 5000)){
        xMen[4]= nivel[2]
        console.log(xMen)
    
    }else if((xMen[3] >= 5001) && (xMen[3] <= 7000)){
        xMen[4]= nivel[3]
        console.log(xMen)
    
    }else if((xMen[3] >= 7001) && (xMen[3] <= 8000)){
        xMen[4]= nivel[4]
        console.log(xMen)
    
    }else if((xMen[3] >= 8001) && (xMen[3] <= 9000)){
        xMen[4]= nivel[5]
        console.log(xMen)
    
    }else if((xMen[3] >= 9001) && (xMen[3] <= 10000)){
        xMen[4]= nivel[6]
        console.log(xMen)
    
    }else if((xMen[3] >= 9001) && (xMen[3] <= 50000)){
        xMen[4]= nivel[7]
        console.log(xMen)
    }else{}
}

//Essa apenas separa as informações.
console.log("****************************************************")

//Abaixo, temos um código que exibirá uma mensagem com o nome do herói, o nível do herói, o sexo do herói, a idade do herói e a quantidade de pontos de XP do herói.   
//Cada uma das opçôes abaixo, exibirá uma mensagem diferente, conforme o herói escolhido.
//Para escolher um herói, basta digitar o nome do herói na variável nomeENivelDoHeroi.
//Para escolher o sexo do herói, basta digitar o nome do herói na variável sexoDoHeroi.
//Para escolher a idade do herói, basta digitar o nome do herói na variável idadeDoHeroi.  
//Para escolher a quantidade de pontos de XP do herói, basta digitar o nome do herói na variável xpDoHeroi.
let nomeENivelDoHeroi = jeanGrey
let sexoDoHeroi = gambit
let idadeDoHeroi = ciclope
let xpDoHeroi = tempestade
let heróiT = fera

//Aqui são criadas variáveis para armazenar os artigos de acordo com o sexo do herói.
let artigoHeroiN = ""
let artigoHeroiS = ""
let artigoHeroiI = ""
let artigoHeroiX = ""
let artigoHeroiT = ""

//Esse bloco de código verifica o sexo do herói e atribui um artigo de acordo com o sexo do herói.
let artigoHeroi = [nomeENivelDoHeroi[1], sexoDoHeroi[1], idadeDoHeroi[1], xpDoHeroi[1], heróiT[1]]

if(artigoHeroi[0] == "Feminino"){
    artigoHeroiN = "A"
    }else{artigoHeroiN = "O"
}

if(artigoHeroi[1] == "Feminino"){
    artigoHeroiS = "A"
    }else{artigoHeroiS = "O"
}

if(artigoHeroi[2] == "Feminino"){
    artigoHeroiI = "A"
    }else{artigoHeroiI = "O"
}

if(artigoHeroi[3] == "Feminino"){
    artigoHeroiX = "A"
    }else{artigoHeroiX = "O"
}

if(artigoHeroi[4] == "Feminino"){
    artigoHeroiT = "A"
    }else{artigoHeroiT = "O"
}





console.log(artigoHeroiN, "X-Men", nomeENivelDoHeroi[0] + 
    ", está no nível " + nomeENivelDoHeroi[4] + "."
)

console.log(artigoHeroiS, "X-Men", sexoDoHeroi[0] + 
    ", é do sexo " + sexoDoHeroi[1]+ "."
)

console.log(artigoHeroiI, "X-Men", idadeDoHeroi[0] + 
    ", tem", idadeDoHeroi[2] + " anos."
)

console.log(artigoHeroiX, "X-Men", xpDoHeroi[0] + 
    ", tem", xpDoHeroi[3] + " pontos de XP."
)

console.log(artigoHeroiT, "X=Men", heróiT[0] +
     ", é do sexo " + heróiT[1]+ 
     ", tem ", heróiT[2] + " anos" + 
     ", tem", heróiT[3] + " pontos de XP" + 
     ", está no nível " + heróiT[4] + "."
)
    
    
console.log("****************************************************")

console.log("ESSE SÃO OS X-MEN")

console.log("*****************************************************")