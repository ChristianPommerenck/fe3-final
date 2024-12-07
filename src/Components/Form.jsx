import React, {useState} from "react";



const Form = () => {
 
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  })


  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    setError(false);
    setMostrar(false);

    e.preventDefault();
    let regexNombre = /^[a-zA-Z0-9\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!usuario.nombre) {
      setError(true);
      console.log('Error: El nombre no puede estar vacío');
    } else if (usuario.nombre.length <= 5) {
      setError(true);
      console.log('Error: El nombre debe tener más de 5 caracteres');
    } else if (!regexNombre.test(usuario.nombre)) {
      setError(true);
      console.log('Error: El nombre solo puede contener letras y números');
    } else if (!usuario.email) {
        setError(true);
        console.log('Error: El email no puede estar vacío');
    } else if (!regexEmail.test(usuario.email)) {
        setError(true);
        console.log('Error: El email solo puede contener letras y números');
    } else {
      setMostrar(true);
      console.log('Nombre válido, mostrando contenido');
    }
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h3> Contacto</h3>
        <label>Nombre:</label>
          <input 
            type="text"
            onChange={(e) =>
              setUsuario({ ...usuario, nombre: e.target.value })
            }
          />
        <label>Email:</label>
          <input 
            type="email"
            onChange={(e) =>
              setUsuario({ ...usuario, email: e.target.value })
            }
          />
      <button>Login</button>
      {error ? (
            <h3 style={{ color: "red" }}>
              Por favor verifique su información nuevamente
            </h3>
          ) : null}
    </form>
    {mostrar ? (
        <h3>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h3>
      ) : null}
    </div>
  );
};

export default Form;
