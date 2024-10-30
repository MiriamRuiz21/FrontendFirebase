"use client"
import axios from "axios";
async function nuevoProducto(e){
    e.preventDefault();
    //console.log("estas en nuevoProducto");
    const url="http://localhost:3000/nuevoProducto";
    const datos={
        nombreProducto:document.getElementById("nombreProducto").value,
        cantidad:document.getElementById("cantidad").value,
        precio:document.getElementById("precio").value
    }
    //console.log(datos);
    const respuesta = await axios.post(url, datos);
    //console.log(respuesta.data);
    location.replace("http://localhost:3001/productos/mostrar/")
    
}

export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevoProducto} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input id="nombreProducto" placeholder="NombreProducto" autoFocus className="form-control mb-3" type="text"/>
                        <input id="cantidad" placeholder="cantidad"  className="form-control mb-3" type="text"/>
                        <input id="precio" placeholder="precio" className="form-control mb-3" type="text"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-3 mb-3" type="submit">Guardar producto</button>
                    </div>

                </div>
            </form>
        </div>
    );

}