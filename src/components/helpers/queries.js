const URL_USER = process.env.REACT_APP_API_USUARIO;

export const crearUsuario = async (usuario) => {
    try {
      console.log(usuario);
      
      const respuesta = await fetch(`${URL_USER}/nuevo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  
  export const login = async (usuario) =>{
    try {
      console.log(usuario);
      const respuesta = await fetch(URL_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
      return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        usuario: datos.usuario,
        token: datos.token,
        uid: datos.uid,
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  }