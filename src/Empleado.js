

//recibimos los parametros 
export function Trabajador({title}){
    console.log(title)
    return <>
        <h1>El parametro que se está recibiendo es: {title}</h1>
    </>
}



export function Card({ nombre, edad, mensaje, ok}){
    return <>
        <h1>El nombre es: {nombre}, edad es:{edad}, mensaje es:{mensaje}, inform: {ok}</h1>
    </>
}