

//recibimos los parametros 
export function Trabajador({title}){
    console.log(title)
    return <>
        <h1>El parametro que se está recibiendo es: {title}</h1>
    </>
}



export function Card({ nombre}){
    return <>
        <h1>El nombre es: {nombre}</h1>
    </>
}