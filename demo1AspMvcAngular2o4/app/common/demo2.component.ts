import { Component } from '@angular/core';
//Se importa el servicio "demo2Service.component.ts"
import { demo2Service } from './demo2Service.component';

@Component({
    selector: 'app-demo2',
    template: `
        <!--Asigno el metodo "myclick0" al boton -->
        <button (click)="myclick0()">CLICK0</button>
        <br>
        <br>
        <button (click)="myclick1()">CLICK1</button>

        <ul>
          <li *ngFor="let data of _data; let i = index">          
            {{"info " + i + ": " + data }}
          </li>
        </ul>

        `,
    providers: [demo2Service],//Se debe indicar el servicio de donde se obtienen lo datos
})

export class demo2Component {
    public _demo2service: demo2Service
    //Genero la variable para que pueda ser usada de forma publica en el "template" del componente
    public _data: string[]

    /**
     * Este constructor se ejecuta al iniciar la este componente
     * @param myDemo2Service
     */
    constructor(private myDemo2Service: demo2Service) {
        //Genera la variable de forma publica
        this._demo2service = myDemo2Service
        //Pinta la informacion automaticamente en el navegador
        this.myDemo2Service.get2().subscribe(val => this._data = val)
    }

    /**
     *Se ejecuta al presionar el boton "CLICK0"
     */
    myclick0() {
        alert(demo2Service.prototype.get1())
    }

    /**
     * Se ejecuta al presionar el boton "CLICK1"
     */
    myclick1() {
        alert("Los datos son listados en: console.log()")
        //Al presionar el boton "CLICK1", muestra los datos en la consola de log de javascript
        this._demo2service.get2().subscribe(val => console.log(val))
    }
}
