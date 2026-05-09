// class Character {
//     constructor(name, hp, attack_damage, atar) {
//         this.name = name;
//         this.hp = hp;
//         this.attack_damage = attack_damage;
//         this.atar = atar;
//     }

//     attack(target) {
//         target.health -= this.attack_damage;
//         console.log(
//             `${this.name} attacks ${target.name} for ${this.attack_damage} damage. ` +
//             `${target.name} has ${target.health} HP remaining.`
//         )
//     } 

//     isAlive() {
//         return this.hp > 0;
//     }
// }

// class Player extends Character {
//     constructor(level) {
//         const stats = Player.statsForLevel(level);
//         super(stats.name, stats.hp, stats.attack_damage);
//         this.level = level;
//     }

//     static statsForLevel(level) {
//         return [
//             { name: "Flop", hp: 100, attack_damage: 15, atar: 30.00 },
//             { name: "Average", hp: 150, attack_damage: 25, atar: 70.00 }, 
//             { name: "ATARMaxxer", hp: 250, attack_damage: 40, atar: 99.95 }
//         ][level - 1];
//     }
// }

// class Enemy extends Character {
//     constructor(name, hp, attack_damage, atar, level) {
//         const stats = Enemy.statsForLevel(level);
//         super(stats.name, stats.hp, stats.attack_damage, stats.atar);
//         this.level = level;
//     }

//     static statsForLevel(level) {
//         return [
//             { name: "BillNye", hp: 100, attack_damage: 10, atar: 80.00 },
//             { name: "NeilDeGrasseTyson", hp: 350, attack_damage: 30, atar: 90.00 },
//             { name: "VSauce", hp: 500, attack_damage: 50, atar: 99.00 }
//         ][level - 1];
//     }
// }

export class Character {
    constructor(name, hp, attack_damage, atar) {
        this.name = name;
        this.hp = hp;
        this.attack_damage = attack_damage;
        this.atar = atar;
    }

    attack(target) {
        target.hp -= this.attack_damage;

    

        console.log(
        `${this.name} attacks ${target.name} for ${this.attack_damage} damage.`
        );
    }

    isAlive() {
        return this.hp > 0;
    }
    }

    export class Player extends Character {
    constructor(level) {
        const stats = Player.statsForLevel(level);

        super(
        stats.name,
        stats.hp,
        stats.attack_damage,
        stats.atar
        );

        this.level = level;
    }

    static statsForLevel(level) {
        const levels = {
        1: {
            name: "Flop",
            hp: 100,
            attack_damage: 15,
            atar: 30.00,
        },

        2: {
            name: "Average",
            hp: 150,
            attack_damage: 25,
            atar: 70,
        },

        3: {
            name: "ATARMaxxer",
            hp: 250,
            attack_damage: 40,
            atar: 99.95,
        }
        };

        return levels[level];
    }
    }

    export class Enemy extends Character {
    constructor(level) {
        const stats = Enemy.statsForLevel(level);

        super(
        stats.name,
        stats.hp,
        stats.attack_damage,
        stats.atar
        );

        this.level = level;
    }

    static statsForLevel(level) {
        const levels = {
        1: {
            name: "Bill Nye",
            hp: 100,
            attack_damage: 10,
            atar: 80.00,
        },

        2: {
            name: "Neil DeGrasse Tyson",
            hp: 350,
            attack_damage: 30,
            atar: 90,
        },

        3: {
            name: "VSauce",
            hp: 500,
            attack_damage: 50,
            atar: 99.00,
        }
        };

        return levels[level];
    }
}
