import { Injectable } from '@angular/core';

import { StarWarsCharacter } from './star-wars-character';
import { CHARACTERS } from './mock-characters';

@Injectable()
export class CharacterService {

    getCharacters(): Promise<StarWarsCharacter[]> {
        return Promise.resolve(CHARACTERS);
    }
    
    getCharactersSlowly(): Promise<Hero[]> {
        return new Promise<StarWarsCharacter[]>(resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getCharacters());
    }

}