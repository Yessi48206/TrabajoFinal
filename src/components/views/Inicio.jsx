import React from 'react';
import { Container } from 'react-bootstrap';
import CardInicio from './CompVarios/CardInicio';
import SobreNosotros from '../views/SobreNosotros';

const Inicio = () => {
    return (
        <>
        <section className='footerSection fondo'>
           <Container>
                <h1 className='display-4 text-center titulo'><b>Bienvenidos a Brock's</b></h1>
                <hr />
                <CardInicio></CardInicio>
            </Container> 
        </section>
        
        <SobreNosotros></SobreNosotros>
        </>
    );
};

export default Inicio;