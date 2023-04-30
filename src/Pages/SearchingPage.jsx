import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SearchingPage () {

  const navigate = useNavigate()

  const Search = () =>{
      navigate('/searching')
  }



    return (
      <div>
               <Navbar/>
        <div className='container'>
        <div className='section__searching'>
            <div className='section__searching__content'>
            <div className='section__searching__content__box'>
              <div className='box__input'>
              <div class="form-floating col-12">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Une formation , un métier , un mot clé</label>
              </div>
              </div>
              <button className='btn__details__search' onClick={Search}>Rechercher</button>
            </div>
            </div>
          </div>
          <div className='main__part__filter'>
          <h2>RÉSULTATS DE VOTRE RECHERCHE</h2>
            <div className='buttons--search'>
                <div className='resultTab'>
                    <p> <span>0</span> résultat</p>
                </div>
                <div className='resultTab'>
                    <p> <span>0</span> formation</p>
                </div>
                <div className='resultTab'>
                    <p> <span>0</span> centre Afpa</p>
                </div>
                <div className='resultTab'>
                    <p> <span>0</span> article</p>
                </div>
            </div>
              <div className='main__part__filter__container'>
                    <h6>Désolé,nous n'avons pas trouvé de résultat pour votre recherche</h6>
              </div>
          </div>

        </div>

          <div className='section__apfa'>
          <h2 className='section__apfa__header'> Pourquoi choisir l'AFPA ?</h2>
            <div className='section__apfa__container'>
            <div className='section__apfa__box'>
              <img src="https://www.afpa.fr/documents/21653/31262/pedagogie.png/d017b97c-a64f-4a69-9991-2dc2a9c138c2?t=1437751008762" alt="" />
                  <p>Un apprentissage en situation réelle de travail</p>
              </div>
              <div className='section__apfa__box'>
                <img src="https://www.afpa.fr/documents/21653/31262/public.png/0302040d-e072-4039-8684-ab3b30e66ac7?t=1437751035075" alt="" />
                <p>Une gamme de formation pour tous les publics</p>
              </div>
              <div className='section__apfa__box'>
              <img src="https://i0.wp.com/www.architecturebois.fr/wp-content/uploads/2015/04/logo-france.png?fit=838%2C932&ssl=1" alt="" />
                <p>Une présence sur tout le territoire</p>
              </div>
              <div className='section__apfa__box'>
                <img src="https://www.afpa.fr/documents/21653/31262/hotel-rest.png/26154025-4531-4425-a349-df59b69e8ca3?t=1437751026841" alt="" />
                <p>Une offre d'hébergement et de restauration</p>
              </div>
            </div>
              
          </div>
          <Footer/>
        </div>

    );
}

