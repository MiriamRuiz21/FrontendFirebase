"use client"
import axios from "axios";
async function nuevaVenta(e){
    e.preventDefault();
    //console.log("estas en nuevoUsuario");
    const url="http://localhost:3000/nuevaVenta";
    const datos={
        idProducto:document.getElementById("idProducto").value,
        idUsuario:document.getElementById("idUsuario").value,
        status:document.getElementById("status").value
    }
    //console.log(datos);
    const respuesta = await axios.post(url, datos);
    //console.log(respuesta.data);
    location.replace("http://localhost:3001/ventas/mostrar")   
}

export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={nuevaVenta} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva Venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="idProducto" placeholder="idProducto" autoFocus className="form-control mb-3" type="text"/>
                        <input id="idUsuario" placeholder="idUsuario"  className="form-control mb-3" type="text"/>
                        <input id="status" placeholder="status"  className="form-control mb-3" type="text"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-3 mb-3" type="submit">Guardar Venta</button>
                    </div>

                </div>
            </form>
        </div>
    );

}