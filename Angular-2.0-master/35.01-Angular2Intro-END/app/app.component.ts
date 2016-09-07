import {Component} from '@angular/core';

export class StarWarsCharacter {
    name: string;
    height: number;
}

@Component({
    selector: 'my-app',
    template: `<h1>Star Wars Characters</h1>
                <h2>{{ character.name }} details!</h2>
                <p>Name: <input [(ngModel)]="character.name"/></p>
                <p>Height: <input [(ngModel)]="character.height"/></p>
                `
})
export class AppComponent {
    character: StarWarsCharacter = {
        name: 'C-3PO',
        height: 123
    }
}
