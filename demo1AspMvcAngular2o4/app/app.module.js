"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//=====================================================
var http_1 = require("@angular/http"); //Se debe importar para hacer uso correcto de Http
//=====================================================
//Componentes principal de la aplicacion
var app_component_1 = require("./app.component");
//=====================================================
//Componentes usados por mi para uso de pruebas
var demo_component_1 = require("./common/demo.component");
var demo2_component_1 = require("./common/demo2.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //Se agrega "HttpModule" para que pueda ser usado desde la app
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        //Lo componentes importados se deben cargar aqui, para su uso desde el app
        declarations: [app_component_1.AppComponent, demo_component_1.demoComponent, demo2_component_1.demo2Component],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map