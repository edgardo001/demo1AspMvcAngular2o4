import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>
            <app-demo></app-demo>
            <br>
            <app-demo2></app-demo2>
            `,
})
export class AppComponent { name = 'Angular'; }