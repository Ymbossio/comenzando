En este ejemplo vamos a enviar parametros entre el componentes
que se esta renderizando que es EMPLEADO 

podemos recibir cualquier tipo de datos siempre con su clave=valor 
a excepción de otros valores que se le da la clave y el valor se le manda entre llaves {}



export function Trabajador(props){
    console.log(props)
    return <>
        <h1>El parametro que se está recibiendo es: {props.title}</h1>
    </>
}
    
    
<Trabajador title="Desarrollador Webs"/>
<Trabajador title="Desarrollador Webs" name="Yovanis" />





export function Trabajador({title, name}){
    console.log(title, name)
    return <>
        <h1>El parametro que se está recibiendo es: title, name}</h1>
    </>
}
    
    

