"use client"
import axios from "axios";
import Link from "next/link";


export default function VentaCancelada({id}){
    //console.log(id);
    async function cancelar() {
        //console.log("Estas en borrar "+id);
        const url="http://localhost:3000/cancelarVenta/"+id;
        const respuesta = await axios.put(url);
        window.location.replace("/ventas/mostrar");
    }
    return(
        <Link href="" onClick={cancelar}>cancelar</Link>
    );
}