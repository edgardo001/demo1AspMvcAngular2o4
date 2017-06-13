"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//Se importa el servicio "demo2Service.component.ts"
var demo2Service_component_1 = require("./demo2Service.component");
var demo2Component = (function () {
    /**
     * Este constructor se ejecuta al iniciar la este componente
     * @param myDemo2Service
     */
    function demo2Component(myDemo2Service) {
        var _this = this;
        this.myDemo2Service = myDemo2Service;
        //Genera la variable de forma publica
        this._demo2service = myDemo2Service;
        //Pinta la informacion automaticamente en el navegador
        this.myDemo2Service.get2().subscribe(function (val) { return _this._data = val; });
    }
    /**
     *Se ejecuta al presionar el boton "CLICK0"
     */
    demo2Component.prototype.myclick0 = function () {
        alert(demo2Service_component_1.demo2Service.prototype.get1());
    };
    /**
     * Se ejecuta al presionar el boton "CLICK1"
     */
    demo2Component.prototype.myclick1 = function () {
        alert("Los datos son listados en: console.log()");
        //Al presionar el boton "CLICK1", muestra los datos en la consola de log de javascript
        this._demo2service.get2().subscribe(function (val) { return console.log(val); });
    };
    return demo2Component;
}());
demo2Component = __decorate([
    core_1.Component({
        selector: 'app-demo2',
        template: "\n        <!--Asigno el metodo \"myclick0\" al boton -->\n        <button (click)=\"myclick0()\">CLICK0</button>\n        <br>\n        <br>\n        <button (click)=\"myclick1()\">CLICK1</button>\n\n        <ul>\n          <li *ngFor=\"let data of _data; let i = index\">          \n            {{\"info \" + i + \": \" + data }}\n          </li>\n        </ul>\n\n        ",
        providers: [demo2Service_component_1.demo2Service],
    }),
    __metadata("design:paramtypes", [demo2Service_component_1.demo2Service])
], demo2Component);
exports.demo2Component = demo2Component;
//# sourceMappingURL=demo2.component.js.map