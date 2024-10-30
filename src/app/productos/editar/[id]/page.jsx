"use client"; 
import axios from "axios";
import { useState, useEffect } from 'react';

// Función para obtener el producto a través del ID
async function getProducto(id) {
    const url = `http://localhost:3000/buscarPorId/${id}`;
    const producto = await axios.get(url);
    return producto.data;
}

export default function EditarProducto({ params: { id } }) {
    const [producto, setProducto] = useState({ nombreProducto: '', cantidad: '', precio: '' });

    useEffect(() => {
        const fetchProducto = async () => {
            const data = await getProducto(id);
            setProducto(data);
        };
        fetchProducto();
    }, [id]);

    const handleInputChange = ({ target: { name, value } }) => setProducto(prev => ({ ...prev, [name]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:3000/editarProducto/${id}`;
        await axios.put(url, producto);
        window.location.href = '/productos/mostrar'; // Redirecciona a la lista de productos
    };

    return (
        <>
            <h1>Editar Producto</h1>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Nombre del Producto:</td>
                            <td>
                                <input
                                    name="nombreProducto"
                                    value={producto.nombreProducto}
                                    onChange={handleInputChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Cantidad:</td>
                            <td>
                                <input
                                    name="cantidad"
                                    type="number"
                                    value={producto.cantidad}
                                    onChange={handleInputChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Precio:</td>
                            <td>
                                <input
                                    name="precio"
                                    type="number"
                                    step="0.01"
                                    value={producto.precio}
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

