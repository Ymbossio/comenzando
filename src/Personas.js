export function Empleado(){

    const Empleado={
        "Nombre": "Yovanis",
        "Cargo": "Admini",
        "Edad": 21
    }
    return <>

    <table>
        <thead>
            <tr>
                <td>Nombre</td>
                <td>Cargo</td>
                <td>Edad</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{Empleado.Nombre}</td>
                <td>{Empleado.Cargo}</td>
                <td>{Empleado.Edad}</td>
            </tr>
        </tbody>
    </table>

    </>
}