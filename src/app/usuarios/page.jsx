import axios from "axios";
async function getUsuarios(){
    //console.log({process.env.BASE_URL});
    const url="http://localhost:3000";
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
        
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            usuarios.map((usuario,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.usuario}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}