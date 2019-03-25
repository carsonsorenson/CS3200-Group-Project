export class Spell {
    constructor(id, spell, type, effect) {
        this.id = id;
        this.spell = spell;
        this.type = type;
        this.effect = effect;
    }

    getId() {
        return this.id;
    }

    getSpell() {
        return this.spell;
    }

    getType() {
        return this.type;
    }

    getEffect() {
        return this.effect;
    }
}