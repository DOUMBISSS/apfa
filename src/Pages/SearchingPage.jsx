import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SearchingPage () {

  const formations =[
    {id:1,
    title:'Artisanat art',
    description:'Transformer un bloc de pierre en élément de pierre de taille fini Bloc de compétences du titre professionnel tailleur de pierres',
    type_of_formation: 'formation qualifiante'  
    },
    {id:2,
      title:'Efficacité professionnelle et management',
      description:'Word - niveau 1',
      type_of_formation: 'formation continue'  
    },
  {id:3,
        title:'Fonctions supports entreprise',
        description:'Web Designer',
        type_of_formation: 'formation continue'  
  },
    {id:4,
          title:'Travaux publics',
          description:'Travaux en hauteur sur supports de distribution publique',
          type_of_formation: 'formation continue'  
    },
    {id:5,
    title:'Services aux entreprises et à la personne',
    description:'Titre à finalité professionnelle/CQP Agent de prévention et de sécurité',
    type_of_formation: 'Certificat de qualification professionnelle'  
    },
  ]

  const keys = ["title","type_of_formation"];
  const [search,setSearch]=useState()
  const [dis,setDis]=useState(true)

  const filter = (event) => {
    setSearch(event.target.value)
    setDis(false)
  }

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
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={search} onChange={filter} />
                <label for="floatingInput">Une formation , un métier , un mot clé</label>
              </div>
              </div>
              {/* <button className='btn__details__search' onClick={Search}>Rechercher</button> */}
            </div>
            </div>
          </div>

          
          { dis  ? (   <div className='main__part__filter'>
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

            ) : (
          <div>
            <div className='main__part__filter'>
              <h2>RÉSULTATS DE VOTRE RECHERCHE</h2>
              <div className='buttons--search'>
                  <div className='resultTab'>
                      <p> <span>{formations.length}</span> résultat</p>
                  </div>
                  <div className='resultTab'>
                      <p> <span>{formations.length}</span> formation (s)</p>
                  </div>
                  <div className='resultTab'>
                      <p> <span>{formations.length}</span> centre Afpa</p>
                  </div>
                  <div className='resultTab'>
                      <p> <span>0</span> article</p>
                  </div>
              </div>
            </div>

          <div className='section__searching__block'>
          <div className='bloc__formations'>
              <div className='bloc__formations__sidebar'>
                <div className='bloc__formations__sidebar__content'>
                <h6 className='medium'>Affiner votre recherche</h6> 
                    <button className='btn__sidebar'> {formations.length} formation(s) disponibles</button>
                  <h6>sélectionnez les filtres ci-dessous pour ajuster votre recherche</h6>
                      <div className="col-12 col-md-12">
                              <div class="accordion accordion-flush" id="accordionFlushExample">
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingSeven">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                          Domaines
                                  </button>
                                  </h2>
                                  <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                        
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                          Régions
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                          Mon projet
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                          Types de formation
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Durée
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                          Modalité pédagogique
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                        </div>
                </div>
                <div className='bloc__formations__sidebar__content'>
                <h6 className='medium'>Affiner votre recherche</h6> 
                    <button className='btn__sidebar'> {formations.length} article(s) disponibles</button>
                  <h6>sélectionnez les filtres ci-dessous pour ajuster votre recherche</h6>
                      <div className="col-12 col-md-12">
                              <div class="accordion accordion-flush" id="accordionFlushExample">
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingSeven">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                          Domaines
                                  </button>
                                  </h2>
                                  <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                        
                                  </div>
                                  </div>
                                  </div>
                                  <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                          Régions
                                  </button>
                                  </h2>
                                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                          <p className="btn__filter"></p>
                                          <p className="btn__filter"></p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                        </div>
                </div>

              </div>

              


              <div className='bloc__formations__container'>
                <h6 className='item--list--header'>Nos formations</h6>

        {formations.filter((formation) => keys.some((key) => {
            if (search === ""){
                return 0;
              }
              else if (formation[key].toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                return formation;
              }
              return 0;
            })).map((formation) =>  <div key={formation.id} className='item--list'>
                      <div className='bloc__formations__container__content'>
                      <div className='first__part'>
                    <h6 className='category__formation'>{formation.title}</h6>
                    <Link className='md'>
                      <h6>{formation.description}</h6>
                      </Link>
                      <h6 className='tag'>{formation.type_of_formation}</h6>
                    </div>
                    <div className='second__part'>
                        <Link><button className='btn__details'>Découvrir la formation</button></Link>
                    </div>
                      </div>
                </div>
                )}

              </div>
          </div>
          </div>
          </div>
            )}
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

