//Abrir http(metodo,url)
//CRUD -Metodo HTTP
//Create -POST
//Read -GET
//Update -PUT-PATCH
//Delate -Delete
//send se encarga de enviar la peticion 
//onload  signica que cuando carge la respuesta , vas a ejecutar esta funcion


//Fetch API   
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => 
  respuesta.json()
  );
};

const actualizarCliente = (nombre,email,id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({nombre,email})
})
.then((respuesta) => respuesta)
.catch((err) => console.log(err));
}


export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
