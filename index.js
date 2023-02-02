let ranks=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
let suits=['Clubs','Hearts','Diamonds','Spades'];
let cardData=[];
let deck=[]
let card=[];
let player1Cards=[];
let player2Cards=[];
let p1Score=0;
let p2Score=0;


//player class
class Player{
    constructor(player1,player2){
        this.player1=player1;
        this.player2=player2;
    }
    
}
//game introduction
console.log("Welcome Players. Lets play War.");

//card class
class Card{
    constructor(suits,ranks){
        this.suits=suits;
        this.ranks=ranks;
    }
}
console.log(suits);
console.log(ranks);

//building deck
function buildDeck(rankCounter,suitCounter){
 for(let suitCounter=0; suitCounter <4; suitCounter++){
    for(let rankCounter=0; rankCounter<13; rankCounter++){
        deck.push(ranks[rankCounter]+suits[suitCounter]);
        console.log(ranks[rankCounter]+suits[suitCounter]);
    }
 }

return deck;
}
console.log(testDeck)


//shuffling deck

function shuffleDeck(deck){
    for(let i=deck.length -1;i>0;i--){
        let x=Math.floor(Math.random()*(i+1));
        [deck[i],deck[x]]-[deck[x],deck[i]];
    }

 }

 
 let testDeck= buildDeck();
 shuffleDeck(testDeck);
 console.log(testDeck)


for(let i=0; i<26;i++){
    player1Cards.push(deck[i]);
    player2Cards.push(deck[i+26]);

    console.log(player1Cards);


   console.log(player2Cards);
    
   function cardPlay(){
    if(player1Cards > player2Cards){
        p1Score+1;
    }else if(player1Cards<player2Cards){
        p2Score+1;
    }
  }
//created a game class similar to menu..
 let player1Plays=cardPlay(player2Cards);
let player2Plays=cardPlay(player1Cards);
let round=compareCards(player1Cards,player2Cards);

class Play{
constructor(){
    this.player1=player1;
    this.player2=player2;
} describe(){

}compareCards(){
}cardPlay(){

}
}if(round===1){
    p1Score++;
}else(round===-1)
    p2Score++;
}
declareWinner();

function compareCards(player1Plays,player2Plays){
    if(this.rank,this.suits>secondCard.rank,secondCard.suits){
        return +1;
    }else if(this.rank,this.suits<secondCard.rank,secondCard.suits){
        return -1;
    }else{
        return 0;
    }
}

function moveCard(){
    if(0<player1Cards && 0<player2Cards){
       for(let i=0; i<26;i--){
             player1Cards.shift();
             player2Cards.shift();
        }if(player1Cards[i]<player2Cards[i]){
            player1Cards.shift(playedCard);
            player2Cards.unshift(playedCard);
        }else if(player1Cards[i]>player2Cards[i]){
            player2Cards.shift(playedCard);
            player1Cards.unshift(playedCard);
            }
         }
     }


function scoreBox(){
    for(let i=0; i<26;i++){
        if(Math.max(player1Cards[i]>player2Cards[i])){
            player1Cards.push(p1Score);
            p1Score+1;
        }else if(Math.max(player1Cards[i]<player2Cards[i])){
            player2Cards.push(p2Score);
            p2Score+1;
        }
      }
    
    }

function declareWinner(){
    if(p1Score>p2Score){
        console.log("Winner is Player 1!")
    }else if(p1Score<p2Score){
        console.log("Winner is Player 2!")
    }else{
    console.log("Draw. We have a tie.")
    }
    console.log("Player 1 score:"+ p1Score);
    console.log("Player 2 score:"+ p2Score);



function loser(){
    if(player1Cards===0 && player2Cards>0){
        console.log("Player 1 lost. Winner is Player 2!");
    }else if(player2Cards===0 && player1Cards>0){
        console.log("Player 2 lost. Winner is Player 1!")
        }
    }
}