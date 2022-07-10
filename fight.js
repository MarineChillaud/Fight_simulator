class Character {
    constructor (nickName, type, health, attack) {
        this.nickName = nickName;
        this.type = type;
        this.health = health;
        this.attack = attack;
        this.level = 1;
    }

    get informations() {
        return this.nickName + ', ' + this.type + ', a ' + this.health + ' point de vie et est au niveau ' + this.level + ".";
    }

    evolve() {
        this.level++;
        console.log(this.nickName + " passe au niveau " + this.level);
    }

    checkHealth() {
        if (this.health<=0) {
            this.health==0
            console.log(this.nickName + " a perdu !"); 
        }
    }
}

class Wizard extends Character {
    constructor(nickName) {
        super (nickName, "Wizard", 170, 90);
    }

    tackle(character) {
        character.health -= this.attack;
        console.log(this.nickName + " attaque " + character.nickName + " en lançant un sort (" + this.attack + " dégâts)!");
        this.evolve();
        character.checkHealth();
    }

    specialMove(character) {
        character.health -= this.attack*5;
        console.log(this.nickName + ' attaque avec son coup spécial PUISSANCE DES ARCANES ' + character.nickName + ' (' + this.attack*5 + ' dégâts)')
        character.checkHealth(character);
    }
}

class Warrior extends Character {
    constructor(nickName) {
    super (nickName, "Warrior", 350, 50);
    }

    tackle(character) {
        character.health -= this.attack;
        console.log(this.nickName + " attaque " + character.nickName + " avec son épée (" + this.attack + 'dégâts)');
        this.evolve();
        character.checkHealth();
    }

    specialMove(character) {
        character.health -= this.attack*5;
        console.log(this.nickName + " attaque avec son coup spécial HACHE DE GUERRE " + character.nickName + this.attack*5);
        character.checkHealth();
    }
}

let rogue = new Wizard('Rogue');
let thor = new Warrior('Thor');
console.log(rogue.informations);
console.log(thor.informations);
rogue.tackle(thor);
console.log(thor.informations);
thor.tackle(rogue);
console.log(rogue.informations);
rogue.specialMove(thor);

