import VentaCancelada from "@/components/cancelarVenta";
import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    //console.log({process.env.BASE_URL});
    const url="http://localhost:3000/mostrarVenta";
    const usuarios = await axios.get(url);
    //console.log(universidades.data);
    return usuarios.data;
    
}
//noticias();
export default async function Universidades(){
    const usuarios=await getUsuarios();
    console.log("console.log({process.env.BASE_URL});");
    
    console.log(usuarios);
    
    return(
        <>
        
            <h1>Ventas</h1>
            <Link href={`/ventas/nuevo`}>
            <button className="btn btn-warning">Nuevo</button>
            </Link>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>ID_Producto</th>
                        <th>ID_Usuario</th>
                        <th>Fecha/Hora</th>
                        <th>status</th>
                        <th>Editar/Cancelar</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            usuarios.map((venta,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{venta.idProducto}</td>
                                    <td>{venta.idUsuario}</td>
                                    <td>{venta.fechaYHora}</td>
                                    <td>{venta.status}</td>
                                    <td>
                                    <Link href={`/ventas/editar/${venta.id}`}>Editar</Link>
                                    /
                                        <VentaCancelada id={venta.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}