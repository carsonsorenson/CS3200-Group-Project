export class Character {
    constructor(id, name, role, house, school, ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater, bloodStatus, species) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.house = house;
        this.school = school;
        this.ministryOfMagic = ministryOfMagic;
        this.orderOfThePhoenix = orderOfThePhoenix;
        this.dumbledoresArmy = dumbledoresArmy;
        this.deathEater = deathEater;
        this.bloodStatus = bloodStatus;
        this.species = species;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    getHouse() {
        return this.house;
    }

    getSchool() {
        return this.school;
    }

    getMinistryOfMagic() {
        return this.ministryOfMagic;
    }

    getOrderOfThePhoenix() {
        return this.orderOfThePhoenix;
    }

    getDumbledoresArmy() {
        return this.dumbledoresArmy;
    }

    getDeathEater() {
        return this.deathEater;
    }

    getBloodStatus() {
        return this.bloodStatus;
    }

    getSpecies() {
        return this.species;
    }
}