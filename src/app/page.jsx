import Link from "next/link";

export default function Inicio() {
    return (
        <div>
            <h1>Inicio</h1>
            <ul>
            <li>
            <Link href={`/usuarios/mostrar`}>
            <button className="btn btn-primary">Ir a Usuarios</button>
            </Link>
            </li>
            <br></br>
            <li>
            <Link href={`/productos/mostrar`}>
            <button className="btn btn-primary">Ir a Productos</button>
            </Link>
            </li>
            <br></br>
            <li><Link href={`/ventas/mostrar`}>
            <button className="btn btn-primary">Ir a Ventas</button>
            </Link></li>
            <br></br>
            </ul>
        </div>
    );
}
