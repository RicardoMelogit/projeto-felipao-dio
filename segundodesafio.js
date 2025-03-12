//Criar uma função que recebe como para receber parâmetros
//de vitórias e  de um players e calcular seu classification
//seguindo a seguinte tabela:
//Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

//Variáveis criadas para armazenar informçãoes
let ranking  = ["Iron", "Bronze", "Silver", "Gold", "Diamond", "Legendary", "Immortal"]
let defeats =  "defeat"
let classification = "undetermined"
let wins_defeats = " "



//Variáveis criadas para armazenar as informações dos players.
let ricardo = ["Ricardo", 1357, 1000,  51, defeats, wins_defeats, classification]
let leandro = ["Leandro",  200,   35, 130, defeats, wins_defeats, classification]
let mariana = ["Mariana",   35,   20,  10, defeats, wins_defeats, classification]
let paulo   = ["Paulo"  ,  550,  250, 130, defeats, wins_defeats, classification]
let aline   = ["Aline"  ,  250,   90, 100, defeats, wins_defeats, classification]
let felipe  = ["Felipe" , 4350, 1975, 500, defeats, wins_defeats, classification]
let thalita = ["Thalita",  187,   80,  20, defeats, wins_defeats, classification]
let julio   = ["Julio"  , 2725, 1240, 330, defeats, wins_defeats, classification]

//Variavel que armazena todos os players
let allPlayers = [ricardo, leandro, mariana, paulo, aline, felipe, thalita, julio]



//Função criada para cacular as derrotas
function calculatingLMatches(playerLosers){
    let defeats = playerLosers[1] - playerLosers[2] - playerLosers[3]
    playerLosers[4] = defeats 
    
    
}

//laço criado para calcular as derrotas de todos os jogadores
for(let i = 0; i < allPlayers.length; i++){
    let player = allPlayers[0+i]
    calculatingLMatches(player)
}

//função criada para calcular o número de vitórias menos derrotas
function calculingWin_defeat(winR){
    winR[5] = winR[2] - winR[4]
    wins_defeats = winR[5]
}

//Laço criado para calcular o número de vitórias menos derrotas de cada jogador
for(let i = 0; i < allPlayers.length; i++){
    let player = allPlayers[0+i]
    calculingWin_defeat(player)
}

//Abaixo é criada uma função para calcular e 
// atribuir um título de acordo com o numero de 
// vitórias menos as derrotas do jogador
let playerR = ""
 
function calculatingRanking(minimumWins, maximumwins, n){
    if((playerR[5] >= minimumWins) && (playerR[5] <= maximumwins)){
        playerR[6] = ranking[n]}
    

}

//O laço abaixo verifiva as vitórias e 
// atribui um titulo a cada jogador
for(let i = 0; i < allPlayers.length; i++){
    playerR = allPlayers[0+i]
    calculatingRanking(0, 10, 0)
    calculatingRanking(11, 20, 1)
    calculatingRanking(21, 50, 2)
    calculatingRanking(51, 80, 3)
    calculatingRanking(81, 90, 4)
    calculatingRanking(91, 100, 5)
    calculatingRanking(101, 1000000,6)
}

//Aqui você digita o mome do jogador 
//e uma frase será exibida com as 
// informações do jogador 
let rankingOfPlayer = ricardo


console.log("Player " + rankingOfPlayer[0] 
+ " has a balance of, \n" + rankingOfPlayer[5] + 
" wins/losses and  is at the level  " + rankingOfPlayer[6])




