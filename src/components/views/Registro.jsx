import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
  };
  return (
    <div className=" footerSection regifoot ">
      <div className="row justify-content-center">
        <div className="col-6 col-xl-6 ">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-dark p-5 text-light mt-5 mb-5"
          >
            <h1 className="text-center">Registro</h1>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("usuario", {
                  required: "Debe ingresar un nombre de usuario",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre no debe tener mas de 30 caracteres",
                  },
                  pattern: {
                    value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                    message: "Debe ingresar un nombre de usaurio valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "Debe ingresar un email",
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Debe ingresar un formato valido",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "Debe ingresar una contraseña",
                  minLength: {
                    value: 8,
                    message: "Su contraseña debe tener al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Su contraseña debe tener como 30 caracteres como maximo",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className='d-flex justify-content-center '>
            <Button type="submit" className="btn btn-primary btn-lg text-center mb-2">
              Registrar
            </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
