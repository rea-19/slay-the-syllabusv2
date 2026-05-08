class Character {
    constructor(name, hp, attack_damage, atar) {
        this.name = name;
        this.hp = hp;
        this.attack_damage = attack_damage;
        this.atar = atar;
    }

    attack(target) {
        target.health -= this.attack_damage;
        console.log(
            `${this.name} attacks ${target.name} for ${this.attack_damage} damage. ` +
            `${target.name} has ${target.health} HP remaining.`
        )
    } 

    isAlive() {
        return this.hp > 0;
    }
}

class Player extends Character {
    constructor(level) {
        const stats = Player.statsForLevel(level);
        super(stats.name, stats.hp, stats.attack_damage);
        this.level = level;
    }
}