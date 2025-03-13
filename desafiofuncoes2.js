// Criar uma função que recebe como para receber parâmetros
// de vitórias e  de um players e calcular seu classification
// seguindo a seguinte tabela:
// Se vitórias for menor do que 10 = Ferro
//  Se vitórias for entre 11 e 20 = Bronze
//  Se vitórias for entre 21 e 50 = Prata
//  Se vitórias for entre 51 e 80 = Ouro
//  Se vitórias for entre 81 e 90 = Diamante
//  Se vitórias for entre 91 e 100= Lendário
//  Se vitórias for maior ou igual a 101 = Imortal

// Variáveis criadas para armazenar informçãoes
let title  = ["Iron", "Bronze", "Silver", "Gold", "Diamond", "Legendary", "Immortal"]
let classification = "classification"
let losses = "losses"
let wL = "wL"




// Variáveis criadas para armazenar as informações dos players.
let ricardo = ["Ricardo", 1357, 1000,  51, losses, wL, classification]
let leandro = ["Leandro",  200,   35, 130, losses, wL, classification]
let mariana = ["Mariana",   35,   20,  10, losses, wL, classification]
let paulo   = ["Paulo"  ,  550,  250, 130, losses, wL, classification]
let aline   = ["Aline"  ,  250,   90, 100, losses, wL, classification]
let felipe  = ["Felipe" , 4350, 1975, 500, losses, wL, classification]
let thalita = ["Thalita",  187,   80,  20, losses, wL, classification]
let julio   = ["Julio"  , 2725, 1240, 330, losses, wL, classification]

// Variavel que armazena todos os players
let allPlayers = [ricardo, leandro, mariana, paulo, aline, felipe, thalita, julio]

//A abaixo são criadas funçôes para calcular 
// o numero de derrotas e tb o de vitórias menos derrotas.
let playerR = ""

function calculatingMatchesL(playerR){
    playerR[4] = playerR[1] - playerR[2] - playerR[3]
    losses = playerR[4]
    return playerR
    
}


function calculatingWL(playerR){
    playerR[5] = playerR[2] - playerR[4]
      wL = playerR[5]
    return playerR 
}


function calculatingTitle(minimumWins, maximumwins, n){
    if((playerR[5] >= minimumWins) && (playerR[5] <= maximumwins)){
        playerR[6] = title[n]
    }
    
}

//Abaixo é utilizado um laço de repetição 
// aplicando toas as funções em cada player
for(let i = 0; i < allPlayers.length; i++){
        playerR = allPlayers[i]
        calculatingMatchesL(playerR)
        calculatingWL(playerR)
        calculatingTitle(0, 10, 0)
        calculatingTitle(11, 20, 1)
        calculatingTitle(21, 50, 2)
        calculatingTitle(51, 80, 3)
        calculatingTitle(81, 90, 4)
        calculatingTitle(91, 100, 5)
        calculatingTitle(101, 1000000,6)
        

}

//Aqui se digita o nome do player e as informações são, mostradas
let rankingOfPlayer = ricardo


console.log("Player " + rankingOfPlayer[0] 
    + " has a balance of, \n" + rankingOfPlayer[5] + 
    " wins/losses and  is at the level  " + rankingOfPlayer[6])
