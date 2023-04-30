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
            <div className='section__filter__container'>
                <div className='section__filter__cards'>
                      <h6 className='section__filter__cards__header'><i class="fa-solid fa-magnifying-glass"></i> Rechercher une formation</h6>
                      <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Métier...</label>
                      </div>

                        <div className='selected'>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Domaine</option>
                            <option value="1">Àccès à la formation</option>
                            <option value="2">Activités de services</option>
                            <option value="3">Artisanat d'art</option>
                            <option value="4">Bâtiment</option>
                            <option value="5">Commerce - vente - distribution</option>
                            <option value="6">Compétences clés - clé A</option>
                            <option value="7">Compétences et fonctions transversales</option>
                            <option value="8">Efficacité professionnelle et management</option>
                            <option value="9">Fonctions supports de l'entreprise</option>
                            <option value="10">Fonctions réglementaires</option>
                            <option value="11">Hôtellerie - restauration - tourisme - loisirs</option>
                            <option value="12">Industrie</option>
                            <option value="13">Insertion et de la médiation</option>
                            <option value="14">Réseaux - Télécommunications - Informatique - Numérique</option>
                            <option value="15"> Services aux entreprises et à la personne</option>
                            <option value="16">Transports - logistique</option>
                            <option value="17"> Travaux publics</option>
                          </select>
                        </div>

                    <div className='selected'>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Région</option>
                        <option value="1">Auvergne-Rhône-Alpes</option>
                        <option value="2">Bourgogne-Franche-Comté</option>
                        <option value="3">Bretagne</option>
                        <option value="4">Centre-Val de Loire</option>
                        <option value="5">Corse</option>
                        <option value="6">Grand-Est</option>
                        <option value="7">Hauts-de-France</option>
                        <option value="8">Ile-de-France</option>
                        <option value="9">Normandie</option>
                        <option value="10">Nouvelle-Aquitaine</option>
                        <option value="11">Occitanie</option>
                        <option value="12">Pays de la Loire</option>
                        <option value="13">Provence-Alpes-Côte d'Azur</option>
                      </select>
                    </div>
                    <div className='btn__container'>
                    <button className='btn__search'>Rechercher</button>
                    </div>
                </div>

                <div className='section__filter__cards'>
                      <h6 className='section__filter__cards__header'><i class="fa-solid fa-location-dot"></i>  Venez nous rencontrer</h6>
                      <div className='section__filter__cards__description'>
                            <p>Pour connaître les événements proches de chez vous, renseignez votre ville ou votre code postal.</p>
                      </div>
                      <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Indiquez votre ville...</label>
                      </div>

                      <div className='btn__container'>
                    <button className='btn__search'>Rechercher</button>
                    </div>

                     
                </div>
                <div className='section__filter__cards'>
                      <div>
                        <div className='section__filter__cards__result'>
                          <h6 className='section__filter__cards__header'><i className="fa-solid fa-chart-simple"></i>  Nos resultats 2021</h6>
                          <p className='date'>Données 2021</p>
                            <div className='section__filter__cards__content'>
                                <div className='box__results'>
                                  <div className='box__results__img'>
                                    <img src="https://www.afpa.fr/o/afpa-theme/images/afpa/qualiopi/2210822-PICTO-ReussiteTPro.svg" alt="" />
                                  </div>
                                  <h6 className='percent'>84,6%</h6>
                                  <div className='box__results__description' >
                                  <p> de réussite au titre professionnel</p>
                                  </div>
                                </div>
                            </div>
                            <div className='section__filter__cards__content'>
                                <div className='box__results'>
                                  <div className='box__results__img'>
                                    <img src="https://www.afpa.fr/o/afpa-theme/images/afpa/qualiopi/2210822-PICTO-AccesEmploi-V2.svg" alt="" />
                                  </div>
                                  <h6 className='percent'>71%</h6>
                                  <div className='box__results__description' >
                                  <p> d'accès à l'emploi dans les 6 mois</p>
                                  </div>
                                </div>
                            </div>
                            <div className='section__filter__cards__content'>
                                <div className='box__results'>
                                  <div className='box__results__img'>
                                    <img src="https://www.afpa.fr/o/afpa-theme/images/afpa/qualiopi/2210822-PICTO-SatisfactionStagiaires.svg" alt="" />
                                  </div>
                                  <h6 className='percent'>86%</h6>
                                  <div className='box__results__description' >
                                  <p> de stagiaires satisfaits</p>
                                  </div>
                                </div>
                            </div>
                            <Link className='link'> <p>Source et methodes de calcul</p></Link>
                            <Link className='linked'> <p> En savoir plus <i className="fa-solid fa-chevron-right"></i></p></Link>
                        </div>
                        <div className='section__filter__cards__result'>
                          <h6 className='section__filter__cards__header'> <i class="fa-solid fa-location-dot"></i>  L'Afpa c'est </h6>
                          <p className='date'>Mise à jour le 10/01/2023</p>
                        <div className='section__filter__cards__content'>
                                <div className='box__results'>
                                  <h6 className='percent'>900</h6>
                                  <div className='box__results__description' >
                                  <p> formations au catalogue</p>
                                  </div>
                                </div>
                            </div>
                            <div className='section__filter__cards__content'>
                                <div className='box__results'>
                                  <h6 className='percent'>116</h6>
                                  <div className='box__results__description' >
                                  <p>centres de formation</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
                

            </div>
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

