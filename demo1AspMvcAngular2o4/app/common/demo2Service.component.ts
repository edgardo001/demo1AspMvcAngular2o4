import { Injectable } from '@angular/core';
import { Http } from '@angular/http';//Se debe importar para hace uso de las peticiones REST
import 'rxjs/add/operator/map';//Se debe importar para hacer uso de ".map(res => res.json())"

/**
 * Se le asigna el tag para que pueda se usada por otros componentes
 */
@Injectable()
export class demo2Service {
    //Creo la variable de para que se usada en esta clase
    private _http: Http
    public constructor(_http: Http) {
        this._http = _http;
    }

    /**
     * Imprime un mensaje
     */
    get1() {
        return "PrimerIntento"
    }   

    /**
     * Hace una peticion get a un API REST
     */
    get2() {
        var response = this._http.get('api/demo').map(res => res.json());
        return response;
    }
}
