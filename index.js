const suits= ['Clubs','Hearts','Diamonds','Spades']
const rank=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
const deck=[];
const cardData=[];
const card=[];
const player1Cards=[];
const player2Cards=[];
p1Score=0;
p2Score=0;

function buildDeck(){
    cardData.suits.forEach((suit)=>{
        cardData.values.forEach((value)=>{
            const card={
                suits:suits,
                cardNumber:value,
                cardValue:index+1
            }
            deck.push(card);
        })
    })
    deck.sort(()=>{
        return Math.random()-0.5;
    })
}

function shuffleDeck(deck){
    for(let i=0; i<52;i++){
        const tempCard=deck[i];
        const index = Math.floor(Math.random()*52);
        deck[i]=deck[index];
        deck[index] = tempCard;
    }
}

function cardPlay(){
for(let i=0; i<26;i++){
    player1Cards.push(deck[i]);
    player2Cards.push(deck[i+26]);
}if(player1Cards > player2Cards){
    player1Cards.unshift(player2Cards);
}else if(player1Cards<player2Cards){
    player2Cards.unshift(player1Cards);
    }
}

function scoreBox(){
    for(let i=0; i<26;i++){
        if(player1Cards>player2Cards){
            p1Score++;
        }else(player1Cards<player2Cards){
            p2Score++;
    
        }
    }
}

function Loser(){
    if(player1Cards===0){
        console.log("Player 1 lost. Winner is Player 2!");
    }else(player2Cards===0){
        console.log("Player 2 lost. Winner is Player 1!")
    }
}

buildDeck();
shuffleDeck();
cardPlay();
scoreBox();
Loser();