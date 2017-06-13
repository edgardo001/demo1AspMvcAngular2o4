import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//=====================================================
import { HttpModule } from '@angular/http';//Se debe importar para hacer uso correcto de Http
import { Http } from '@angular/http';
//=====================================================
//Componentes principal de la aplicacion
import { AppComponent } from './app.component';
//=====================================================
//Componentes usados por mi para uso de pruebas
import { demoComponent } from './common/demo.component';
import { demo2Component } from './common/demo2.component';


@NgModule({
    //Se agrega "HttpModule" para que pueda ser usado desde la app
    imports: [BrowserModule, HttpModule],
    //Lo componentes importados se deben cargar aqui, para su uso desde el app
    declarations: [AppComponent, demoComponent, demo2Component],
    bootstrap: [AppComponent]
})
export class AppModule { }
