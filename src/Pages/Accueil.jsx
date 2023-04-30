import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Accueil () {



    return (
      <div>
               <Navbar/>
        <div className='container'>
          <div className='section__searching'>
            <div className='section__searching__content'>
            <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Une formation , un métier , un mot clé</label>
              </div>
              <button className='btn__details__search'>Afficher toutes nos formations</button>
            </div>
          </div>

          <div className='section__presentation'>
            <div className='section__presentation__content'>
                <div className='cards'>
                    <div className='cards__header'>
                        <h6>NOTRE OFFRE PARTICULIER</h6>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div className='cards__body'>
                    <p>Apprendre, se former, réfléchir à son projet pro, se reconvertir</p>
                    <div className='cards__descriptions'>
                      <p>Formez-vous à distance</p>
                      <p>Devenez agent de restauration Buffalo Grill</p>
                      <p>Devenez Technicien vendeur chez Decathlon</p>
                      <p>Devenez Assistante de vie avec Oui Care</p>
                    </div>
                    <div className='btn__container'>
                      <button className='btn__more'>Découvrir plus</button>
                    </div>

                    </div>
                </div>

                <div className='cards'>
                <div className='cards__header'>
                        <h6>NOS FORMATIONS EN ALTERNANCE</h6>
                        <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className='cards__body'>
                    <p>Nos formations prêtes a l'emploi sur plus de 200 métiers</p>
                    <div className='cards__descriptions'>
                      <p>Nos formations prêtes à l'emploi </p>
                      <p> Trouvez votre entreprise</p>
                      <p> Se former a l'Afpa</p>
                      <p>Le choix de l'alternance</p>
                    </div>
                    <div className='btn__container'>
                      <button className='btn__more'>Découvrir plus</button>
                    </div>

                    </div>

                </div>

                <div className='cards'>
                <div className='cards__header'>
                        <h6>RECRUTEMENT EN ALTERNANCE</h6>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div className='cards__body'>
                    <p>Un accompagnement complet pour former et recruter vos alternants</p>
                    <div className='cards__descriptions'>
                      <p>L'alternance avec l'Afpa</p>
                      <p> Un recrutement encadré et maîtrisé</p>
                      <p> Un service clé en main </p>
                      <p>Un formation en tutorial</p>
                    </div>
                    <div className='btn__container'>
                      <button className='btn__more'>Découvrir plus</button>
                    </div>

                    </div>

                </div>
            </div>

          </div>

          <div className='section__filter'>
    

          </div>

          <div className='section__info'>
              <h2 className='section__info__header'> Fill info</h2>
              <div className='section__info__container'>
                  <div className='section__info__content'>

                  </div>
                  <div className='section__info__content'>

                  </div>
                  <div className='section__info__content'>

                  </div>
              </div>
          </div>

           </div>
          <Footer/>
        </div>

    );
}

