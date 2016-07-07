/**
 * Created by anthonyrogers on 6/21/16.
 */
class PokemonTrainer{
    name: string;
    numberOfPokeballs: number;
    pokemon: Array<Pokemon>;
    gymBadges: string[];

    startFight(pokemon: Pokemon, attackName: string): string{
        return pokemon.attack(attackName);
    }
     runAway(): string{
         return"Im out"
     }

}

class Pokemon{
    name: string;
    trainerName: string;
    hp: number;
    private attacks: Array<string>;

    get attacks(): Array<string>{
        return this.attacks
    }

    set attacks(attacks: Array<string>){
        this.attacks = attacks;
    }


    attack(attackName: string): string{
        return attackName;
    }
}



import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");


/**import { sayHello } from "./greet";

console.log(sayHello("TypeScript"));*/

/**function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");*/

