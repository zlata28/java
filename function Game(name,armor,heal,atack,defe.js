function Game(name,armor,heal,atack,defender){
    this.name = name,
    this.armor = armor,
    this.heal = heal,
    this.atack = atack,
    this.defender = defender
}

const var1 = new Game("Doni","sword",100,10,10);

const var2 = new Game("Oleg","sword",100,15,5);

function duel(var1,var2){
    
    while(var1.heal > 0 && var2.heal > 0){
        var1.heal -=(var2.atack - var1.defender)
        var2.heal -=(var1.atack - var2.defender)
        console.log('жизни ${var1.name}: ${var1.heal}')
        console.log('жизни ${var2.name}: ${var2.heal}')
    }
    
}

duel(var1,var2)