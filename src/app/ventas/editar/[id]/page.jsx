"use client"; 
import axios from "axios";
import { useState, useEffect } from 'react';

// Función para obtener la venta a través del ID
async function getVenta(id) {
    const url = `http://localhost:3000/buscarPorId/${id}`;
    const venta = await axios.get(url);
    return venta.data;
}

export default function EditarVenta({ params: { id } }) {
    const [venta, setVenta] = useState({ idProducto: '', idUsuario: '' });

    useEffect(() => {
        const fetchVenta = async () => {
            const data = await getVenta(id);
            setVenta(data);
        };
        fetchVenta();
    }, [id]);

    const handleInputChange = ({ target: { name, value } }) => 
        setVenta(prev => ({ ...prev, [name]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:3000/editarVenta/${id}`;
        console.log("Datos enviados al backend:", venta); 
        await axios.put(url, venta);
        window.location.href = '/ventas/mostrar';
    };

    return (
        <>
            <h1>Editar Venta</h1>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>ID del Producto:</td>
                            <td>
                                <input
                                    name="idProducto"
                                    type="text"
                                    value={venta.idProducto}
                                    onChange={handleInputChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ID del Usuario:</td>
                            <td>
                                <input
                                    name="idUsuario"
                                    type="text"
                                    value={venta.idUsuario}
                                    onChange={handleInputChange}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </>
    );
}
