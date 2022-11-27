// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return "A Saxon has died in combat"
    }
    } 
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(newViking) {
    this.vikingArmy.push(newViking);
  };
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  };

  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomSaxon = this.saxonArmy[saxonIndex];
    const randomViking = this.vikingArmy[vikingIndex];

    const result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
         this.saxonArmy.splice(saxonIndex, randomSaxon);
        }
        return result;
    };

  saxonAttack() {
    // let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    // let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    // const randomSaxon = this.saxonArmy[saxonIndex];
    // const randomViking = this.vikingArmy[vikingIndex];

    // const result = randomViking.receiveDamage(randomSaxon.strength);
    //     if (randomViking.health <= 0) {
    //      this.vikingArmy.splice(vikingIndex, randomViking);
    //     }
    //     return result;
  };

//   attack(soldier1, soldier2){
//     let soldier1 = ran
//     // two soldiers, one attacking the other
//     // we need to know who comes first
//     // they need to be stored in variables
//   };

  showStatus() {
    if (this.saxonArmy.length === 0) {
        return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
        'Saxons have fought for their lives and survived another day…';
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
        return 'Vikings and Saxons are still in the thick of battle.';
    }
  };
}

