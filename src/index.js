//Importamnos las librerias correspondientes para inicar el proyecto
import React from "react";
import ReactDOM from "react-dom/client";

import { Saludar } from "./Saludar";
import { Empleado } from "./Personas";
import { Producto } from "./Com-Expor-ExporDefault"; //Importamos simplemente una función 
/* import Expor_Producto from "./Com-Expor-ExporDefault"; //Importamos todo el archivo completo de donde estamos llamando a la función */


//creamos una variable donde vamos a renderizar el proyecto 
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
    <Producto/>
    </>
)