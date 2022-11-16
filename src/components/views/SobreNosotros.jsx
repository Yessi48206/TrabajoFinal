import React from 'react';

const SobreNosotros = () => {
    return (
        <>
        
        <section className='imagen footerSection'>
         <h2 class="display-3 text-center text-light letra">Sobre Nosotros</h2>
        <hr class="text-light" />
        
        <h2 class="text-light text-center ">
        Somos dos chicas  estudiantes perteneciente a la academia de Rolling Code School.
        Trabajamos juntas para diseñar, crear y producir una pagina de un bar, cuyo objetivo es
         brindar una plataforma eficiente, elegida por los usuarios.</h2>
         <h3 class="text-light text-center mt-2">Una frase que nos identifica</h3>
        <h5 class="text-light text-center my-5">
        El trabajo en equipo nos enriquece como profesionales, dandonos
        perspectivas que tal vez nunca hubieramos pensados.
        </h5>
        
        <aside className='container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXHcokjUs_j_MexyxtUtwPBu6ltQ8JzxsSygJVi1q&s" alt="" className='borde' />
        </aside>
        <aside className='container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXHcokjUs_j_MexyxtUtwPBu6ltQ8JzxsSygJVi1q&s" alt="" className='borde' />
        </aside>
        </section>
        </>
        
    );
};

export default SobreNosotros;