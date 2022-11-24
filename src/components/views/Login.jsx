import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Login = () => {
    const{
        register,
        handleSubmit,
        formState:{ errors},
    } = useForm();
    const onSubmit= (datos)=>{
        console.log(datos)
    }
    return (
        <>
        <section className="regifoot footerSection">
        <div className="row justify-content-center">
        <div  className="col-6">
                <Form onSubmit={handleSubmit(onSubmit)} className='bg-dark p-5 text-light mt-5 mb-5'>
                <h1 className='text-center'>Iniciar Sesion</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El mail del usuario es obligatorio",
                })}
              />
               <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className='d-flex justify-content-center '>
            <Button type="submit" className="btn btn-primary btn-lg text-center mb-2">
              Iniciar
            </Button>
            </div>
        
                </Form>
                </div>
                </div>
        </section>
        </>
    );
};

export default Login;