"use client"; 
import axios from "axios";
import { useState, useEffect } from 'react';

async function getUsuario(id) {
    const url = `http://localhost:3000/buscarPorId/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default function editarUsuario({ params: { id } }) {
    const [usuario, setUsuario] = useState({ nombre: '', usuario: '', password: '' });

    useEffect(() => {
        const fetchUsuario = async () => {
            const data = await getUsuario(id);
            setUsuario(data);
        };
        fetchUsuario();
    }, [id]);

    const handleInputChange = ({ target: { name, value } }) => setUsuario(prev => ({ ...prev, [name]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:3000/editarUsuario/${id}`;
        await axios.put(url, usuario);
        window.location.href = '/usuarios/mostrar';
    };

    return (
        <>
            <h1>Editar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Nombre del Usuario:</td>
                            <td>
                                <input
                                    name="nombre"
                                    value={usuario.nombre}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Usuario:</td>
                            <td>
                                <input
                                    name="usuario"
                                    value={usuario.usuario}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input
                                    name="password"
                                    value={usuario.password}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Guardar Cambios</button>
            </form>
        </>
    );
}
