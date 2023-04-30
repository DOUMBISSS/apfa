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
                      <p>Formez-vous sur le terrain au mérier de technicien vendeur en...</p>
                  </div>
                  <div className='section__info__content'>
                      <p>Technicien supérieur en impression 3D, un métier qui de...  </p>
                  </div>
                  <div className='section__info__content'>
                      <p>Reconversion professionnelle : focus sur 10 métiers qui marquent le monde </p>
                  </div>
              </div>
          </div>

          <div className='section__partenaires'>
              <div className='section__partenaires__header'>
                  <h6>Nos partenaires</h6>
                  <p>La plupart des formations qualifiantes de l'Afpa sont financées  dans le cadre <br/> de la programmation de formation de votre Conseil régional</p>
              </div>
              <div className='section__partenaires__details'>
                  <div className='section__partenaires__details__content'>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/19566662/LOGO_Horizontal_RVB+%281%29.png/855e2cb6-ea65-bb9a-70bb-aa60261bda0e?t=1673344769000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/Logo-Nouvelle-Aquitaine.png/a36c596d-114e-4b78-8a54-d8d60ec14efc?t=1604393376000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/REGION+AUVERGNE+RHONE+ALPES.jpg/12cbe525-42e9-4620-b110-11ae82f01bcd?t=1476363395000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/22188/region-Bretagne.jpg/4e21d632-d377-49d0-baa8-c2c5f22a6c89?t=1439281823000" alt="" />
                      </div>

                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/REGION+BOURGOGNE+FRANCHE+COMTE.jpg/818bb0a0-dce0-4574-a1e0-e48b09f1fbc9?t=1481026454000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/22188/region+Centre-Val+de+Loire-+2015.jpg/645974db-240c-47b8-a7ed-637db0c63d61?t=1445420597000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/22188/region+corse.jpg/6671f307-2342-4bf4-9e39-bd27fe474bc7?t=1439281821000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/22188/IDF-150.jpg/dd635eb4-ae64-4655-a88f-48372f573e7f?t=1581691107000" alt="" />
                      </div>

                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/REGION+LANGUEDOC+ROUSSILLON.jpg/d6f7b8f6-6780-4479-a47f-1c5ef67f7a2f?t=1487579817000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/REGION+NPC+PICARDIE.jpg/33006687-d94d-4201-b404-07964d8547fa?t=1480416723000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/17470341/REGION+NORMANDIE.jpg/b239e95a-24f3-4f9e-859b-d2d3439a4d46?t=1458746760000" alt="" />
                      </div>
                      <div className='section__partenaires__details__images'>
                      <img src="https://www.afpa.fr/documents/21653/22188/LOGO-PACA.jpg/57b3cf26-669d-45c0-b04b-fbe24bae1967?t=1550045489000" alt="" />
                      </div>
                  </div>
              </div>
          </div>

           </div>
          <Footer/>
        </div>

    );
}

