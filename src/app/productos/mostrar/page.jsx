import Link from "next/link";
import axios from "axios";
import BorrarProducto from "@/components/borrarProducto";

async function getProductos() {
    const url = "http://localhost:3000/mostrarProducto";
    const productos = await axios.get(url);
    return productos.data;
}

export default async function Productos() {
    const productos = await getProductos();

    return (
        <>
            <h1>Productos</h1>
            <Link href={`/productos/nuevo`}>
            <button className="btn btn-warning">Nuevo</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Editar/Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{producto.nombreProducto}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    
                                    <Link href={`/productos/editar/${producto.id}`}>Editar</Link>
                                    /
                                    <BorrarProducto id={producto.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
