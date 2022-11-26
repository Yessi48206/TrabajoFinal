import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import avatarDai from './img/avatarDaiana.jpg'
import avatarYessi from './img/avatarYessica.jpg'

const SobreNosotros = () => {
    return (
        <>
        
        <section className='imagenFondo footerSection'>
         <h2 className="display-3 text-center text-light letra">Sobre Nosotros</h2>
        <hr className='text-light' />
        
        <h2 class="text-light text-center ">
        Somos dos chicas  estudiantes perteneciente a la academia de Rolling Code School.
        Trabajamos juntas para diseñar, crear y producir una pagina de un bar, cuyo objetivo es
         brindar una plataforma eficiente, elegida por los usuarios.</h2>
         <hr className='text-light' />
         <h3 class="text-light text-center mt-2">Una frase que nos identifica</h3>
        <h2 class="text-light text-center my-5">
        El trabajo en equipo nos enriquece como profesionales, dandonos
        perspectivas que tal vez nunca hubieramos pensados.
        </h2>
        <Row  className='container text-center'>
        <Col  className='mb-5 img' >
        <aside >
            <img src={avatarDai} alt=" avatar de yessica" className='borde' />
            <h3 className='text-light'>Daiana Leiva</h3>
            <a href='https://www.facebook.com/daiana.leiva.547?mibextid=ZbWKwL'> <ion-icon name="logo-facebook" className='iconos'></ion-icon></a>
           <a href='https://instagram.com/dayleiva92?igshid=YmMyMTA2M2Y='> <ion-icon name="logo-instagram"></ion-icon></a>
            <a href='https://github.com/JDayLeiva'><ion-icon name="logo-github"></ion-icon></a>
        </aside>
        </Col>
        <Col className='mb-5 img' >
        <aside>
            <img src={avatarYessi} alt="avatar de daiana" className='borde' />
            <h3 className='text-light '>Yessica Juarez</h3>
            <a href='https://www.facebook.com/profile.php?id=100009693700369&mibextid=ZbWKwL'><ion-icon name="logo-facebook" ></ion-icon></a>
           <a href='https://instagram.com/yesiiijuarezz?igshid=YmMyMTA2M2Y='> <ion-icon name="logo-instagram"></ion-icon></a>
           <a href='https://github.com/'><ion-icon name="logo-github"></ion-icon></a>
        </aside>
        </Col>
        </Row>
        </section>
        </>
        
    );
};

export default SobreNosotros;