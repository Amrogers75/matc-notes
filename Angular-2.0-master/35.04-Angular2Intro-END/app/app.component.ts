import { Component, OnInit } from '@angular/core';

import { StarWarsCharacter } from "./star-wars-character";
import { CharacterService } from './character.service';

@Component({
    selector: 'my-app',
    template: `
<h1>Star Wars Characters</h1>
<ul>
    <li *ngFor="let character of characters" (click)="selectCharacter(character)" [class.selected]="character === selectedCharacter">
        <span>{{ character.name }}</span>
    </li>
</ul>
<character-detail [character]="selectedCharacter"></character-detail>
`,
    styles: [`
.selected {
    color: blue;
}
`],
    providers: [ CharacterService ]
})
export class AppComponent implements OnInit {
    characters: StarWarsCharacter[];
    selectedCharacter: StarWarsCharacter;

    constructor(private service: CharacterService) {}

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters(): void {
        // this.service.getCharacters().then(characters => this.characters = characters);
        this.service.getCharactersSlowly().then(characters => this.characters = characters);
    }

    selectCharacter(character: StarWarsCharacter): void {
        this.selectedCharacter = character;
    }
}
