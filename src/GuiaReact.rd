//Importamos las librerias correspondientes para inicar el proyecto
import React from "react";
import ReactDOM from "react-dom/client";

//creamos una variable donde vamos a renderizar el proyecto 
const root = ReactDOM.createRoot(document.getElementById('root'));


//creamos un componente 
function Saludar (){
    //const situacion=true

  /*   if(situacion){
        return <span>Es casado</span>
    }else{
        return <span>Es soltero</span>
    } */

    //operador ternario
    //return <h1>{situacion ? 'es casado': "es soltero"}</h1>

    //exercise 2
    const Persona ={
        "nombre": "Yovanis",
        "Edad": 22,
        "Perfil": "Admin"
    }

  // return <h1>
  // {JSON.stringify(Persona)/* Convierte un objeto JS en string */}
  //  </h1>

  return <div>
    <h1>El nombre: {Persona.nombre}</h1>
    <h2>Su edad es: {Persona.Edad}</h2>
    <h3>Cargo: {Persona.Perfil}</h3>
  </div>
}  

//Aquí es donde renderizamos nuestra aplicación
root.render(<>
    <Saludar/> {/* Desde aquí rebnderizamos el componente */}
</>);

