


//mediante la etiqueta export seguido de la función importamos solamente la función que se está declarando
export function Producto (){
    return <>
        <h1>Hola Desde el componente individual</h1>
    </>
}

//Desde este componente se está exportando todo el documento incluso la función de arriba con la sentencia EXPORT DEFAULT 
function Expor_Producto (){
    return<>
        <h1>Componente de exportación másiva</h1>
    </>
}

