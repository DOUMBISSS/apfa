import React from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Informations () {



    return (
      <div>
               <Navbar/>
        <div className='container'>
                <h1>Nos differentes formations</h1>
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

