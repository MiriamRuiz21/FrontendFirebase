
import axios from "axios";
async function getproductos(){
    //console.log({process.env.BASE_URL});
    const url="http://localhost:3000/mostrarProducto";
    const productos = await axios.get(url);
    //console.log(universidades.data);
    return productos.data;
    
}
//noticias();
export default async function Universidades(){
    const productos=await getproductos();
    console.log("console.log({process.env.BASE_URL});");
    console.log(productos);
    return(
        <>
        
            <h1>productos</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            productos.map((producto,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{producto.nombreProducto}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.precio}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}