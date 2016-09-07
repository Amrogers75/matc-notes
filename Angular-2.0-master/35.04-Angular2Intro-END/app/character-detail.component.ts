import {Component, Input} from '@angular/core';
import {StarWarsCharacter} from "./star-wars-character";

@Component({
    selector: 'character-detail',
    template: `
<div *ngIf="character">
    <h2>{{ character.name }} details!</h2>
    <p>Name: <input [(ngModel)]="character.name"/></p>
    <p>Height: <input [(ngModel)]="character.height"/></p>
</div>
`
})
export class CharacterDetailComponent {
    @Input()
    character: StarWarsCharacter;
}