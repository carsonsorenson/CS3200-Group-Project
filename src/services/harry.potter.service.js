import apiService from './api.service';
import { Character } from '../models/character';
import { Spell } from '../models/spell';

let HarryPotterService = class HarryPotterService {
    getSortingHouse() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getSortingHat())
            .then((response) => response.json())
            .then((response => {
                console.log(response);
                resolve(response);
            }))
            .catch((error) => {
                console.log(error);
                reject(error);
            })
        })
    }

    getCharacters(house) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getCharacters(house))
            .then((response) => response.json())
            .then((response => {
                let items = [];
                response.forEach(element => {
                    items.push(new Character(
                        element._id,
                        element.name,
                        element.role,
                        element.house,
                        element.school,
                        element.ministryOfMagic,
                        element.orderOfThePhoenix,
                        element.dumbledoresArmy,
                        element.deathEater,
                        element.bloodStatus,
                        element.species
                    ));
                })
                console.log(items);
                resolve(items);
            }))
            .catch((error) => {
                console.log(error);
                reject(error);
            })
        })
    }

    getSpells() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getSpells())
            .then((response) => response.json())
            .then((response => {
                let items = [];
                response.forEach(element => {
                    items.push(new Spell(
                        element._id,
                        element.spell,
                        element.type,
                        element.effect
                    ));
                })
                console.log(items);
                resolve(items);
            }))
            .catch((error) => {
                console.log(error);
                reject(error);
            })
        })  
    }


}

const harryPotterService = new HarryPotterService();
export default harryPotterService;