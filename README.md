"# demo1AspMvcAngular2o4" 

1.- Para iniciar este proyecto, se realizo un clonado de Angular desde su repositorio "quickstart":

  $> git clone https://github.com/angular/quickstart

2.- Luego se creo un proyecto "WebApplication" en VS2017 con ASP.net 4.62, seleccionando un proyecto vacio y habilitando la opcion "Web API"

3.- Sobre el proyecto generado de VS2017, seleccionar "agregar/elemento existente" e ir a la carpeta clonada de Angular "quickstart" y copiar los siguientes elementos a la raiz del proyecto VS2017:
  
  -quickstart/package.json
  -quickstart/src
  
  la carpeta "src" con todo su contenido y carpetas (el contenido debe quedar en la raiz del proyecto, no dentro de una carpeta src), la carpeta "app" dentro de src, debera quedar en la raiz del proyecto pero con su contenido en el interior.
  
4.- Se debe poder ejecutar la instalacion de los paquetes npm, para esto se puede descargar node para window desde:
  https://nodejs.org/dist/v6.11.0/node-v6.11.0-x64.msi
  
5.- Una vez instalado node, ir a la carpeta del proyecto, donde se encuentra el archivo "package.json", y ejecutar desde CMD
  
  $> npm install  
  
6.- ahora se puede iniciar el proyecto VS2017 con la tecla F5
  
  


