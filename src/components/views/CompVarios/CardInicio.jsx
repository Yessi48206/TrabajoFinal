import React from 'react';
import pintas from '../img/pintas.jpg';
import ginTonic from '../img/ginTonic.jpg';
import pizza2 from '../img/pizza2.jpg';
import dosGin from '../img/dosGin.jpg';

const CardInicio = () => {
    return (
        <div className='row my-5 py-5 sau'>
            <div className='col-3 my-2'>
                <img src={pintas} alt="" className='w-100 imgProduc '/>

            </div>
            <div className='col-3 my-2'>
                <img src={ginTonic} alt="" className='w-100 imgProduc'/>

            </div>
            <div className='col-3 my-2'>
                <img src={pizza2} alt="" className='w-100 imgProduc'/>

            </div>
            <div className='col-3 my-2'>
                <img src={dosGin} alt="" className='w-100 imgProduc'/>

            </div>
            
        </div>
    );
};

export default CardInicio;