class  Card { 
    constructor(suit, st_val, num_val){
        this.suit = suit;
        this.st_val = st_val;
        this.num_val = num_val;
    }
    show(){
        console.log(this.suit + ","+this.st_val + this.num_val);
      
    }
}

// const test = new Card("one")
// test.show();

class Deck {
    constructor(){
        this.cards = this.createDeck();
        }
    
    createDeck(){
        var cards = []
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var st_val = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        var num_val = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        
        for (let i in suits) {
            for (let j in num_val) {
                cards.push(new Card(suits[i], st_val[j], num_val[j]));
            }
        }
        return cards;
    }
    

    shuffle(){
        var m = this.cards.length, t, i;

        while (m){
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this;
    }
    reset(){
        this.cards = this.createDeck();
        return this;
    }
    deal(){
        return this.cards.pop();
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    get_card(deck){
        this.hand.push(deck.deal());
        return this;
    }

    discard(suit, st_val){
        for (let i in this.hand) {
            if (this.hand[i].suit == suit && this.hand[i].st_val == st_val){
                this.hand.splice([i], 1);
                return this;
            }
        }
        console.log("You don't have that card...");
        return this;
    }
}

var deck = new Deck;
// console.log(deck.shuffle());
// console.log(deck.reset())
// console.log(deck.deal())


var bob = new Player("Bob");
// console.log(bob.get_card(deck))
// bob.discard("Spades","Ace")







