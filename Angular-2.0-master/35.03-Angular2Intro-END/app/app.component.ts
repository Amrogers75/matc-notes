import {Component} from '@angular/core';
import {StarWarsCharacter} from "./star-wars-character";

const CHARACTERS: StarWarsCharacter[] = [
    {
        "name": "Luke Skywalker",
        "height": 172,
        "mass": 77,
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male"
    },
    {
        "name": "C-3PO",
        "height": 167,
        "mass": 75,
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a"
    },
    {
        "name": "R2-D2",
        "height": 96,
        "mass": 32,
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a"
    },
    {
        "name": "Darth Vader",
        "height": 202,
        "mass": 136,
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male"
    },
    {
        "name": "Leia Organa",
        "height": 150,
        "mass": 49,
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female"
    }
];

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
`]
})
export class AppComponent {
    characters = CHARACTERS;
    selectedCharacter: StarWarsCharacter;

    selectCharacter(character: StarWarsCharacter): void {
        this.selectedCharacter = character;
    }
}
