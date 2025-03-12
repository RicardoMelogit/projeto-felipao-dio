//Criar um código que exiba uma mensagem 
//com o nome do herói, o nível do herói, 
// o sexo do herói, a idade do herói e a 
// quantidade de pontos de XP do herói.

// Nas linha 80,81,82 e 83, são criadas 
// variáveis para mostrar separadamente 
// o nome, sexo, idade e xp de cada herói.

//No código abaixo são criadas variáveis para armazenar os dados de cada herói.

let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let vazio = "verificar"

//Aqui cada herói e suas informações são armazenadas em uma variável.
let wolverine  = ["Wolverine ", "Masculino", 120,  9350, vazio]
let tempestade = ["Tempestade", "Feminino" ,  35,  8562, vazio]
let vampira    = ["Vampira "  , "Feminino" ,  25,  7568, vazio]
let jubileu    = ["Jubileu"   , "Feminino" ,  15,   952, vazio]
let fera       = ["Fera"      , "Masculino",  37,  6580, vazio]
let jeanGrey   = ["JeanGrey"  , "Feminino" ,  32, 20000, vazio]
let ciclope    = ["Ciclope"   , "Masculino",  34,  8555, vazio]
let gambit     = ["Gambit"    , "Masculino",  30,  4500, vazio]
let professorX = ["ProfessorX", "Masculino",  60, 11000, vazio]

//Aqui os heróis são armazenados todos os herois.
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
        
    }else if((xMen[3] >= 1001) && (xMen[3] <= 2000)){
        xMen[4]= nivel[1]
        

    }else if((xMen[3] >= 2001) && (xMen[3] <= 5000)){
        xMen[4]= nivel[2]
        
    
    }else if((xMen[3] >= 5001) && (xMen[3] <= 7000)){
        xMen[4]= nivel[3]
        
    
    }else if((xMen[3] >= 7001) && (xMen[3] <= 8000)){
        xMen[4]= nivel[4]
        
    
    }else if((xMen[3] >= 8001) && (xMen[3] <= 9000)){
        xMen[4]= nivel[5]
        
    
    }else if((xMen[3] >= 9001) && (xMen[3] <= 10000)){
        xMen[4]= nivel[6]
        
    
    }else if((xMen[3] >= 9001) && (xMen[3] <= 50000)){
        xMen[4]= nivel[7]
        
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




//Aqui são criadas as mensagens que apareceram na tela
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

console.log(artigoHeroiT, "X-Men " + heróiT[0] + ", é do sexo " + heróiT[1] + ", está com", 
heróiT[2] + " anos, \ntem", heróiT[3] + " pontos de XP e está no nível " + heróiT[4] + ".")
    
    
console.log("****************************************************")

console.log("ESSE SÃO OS X-MEN")

console.log("*****************************************************")