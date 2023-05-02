import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { coffee } from '@fortawesome/free-brands-svg-icons'
export default function  Footer () {
            
return (
    <div className='footer'>
      <div className='footer__container'>
          <div className='footer__container__content'>
              <h5>Nos contacts sur les reseaux sociaux</h5>
              <div className='social__media__container'>
                  <div className='social__media'>
                  <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className='social__media'>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className='social__media'>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <div className='social__media'>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div className='social__media'>
                      <i class="fa-brands fa-youtube"></i>
                  </div>
              </div>
          </div>
          <div className='footer__container__content'>
              <h5 className='footer__container__header'>Visite virtuelle</h5>
              <p>Vous avez toujours voulu  savoir à quoi ressemblent nos plateaux de formation ? 
                Avec nos visites virtuelles 360° HD, 
                plongez en immersion et découvrez plus de 60 plateaux de formation.
                </p>
          </div>
          <div className='footer__container__content'>
              <h5 className='footer__container__header'>Votre avenir pro</h5>
              <p>Etes-vous vraiment fait pour ce métier ? Avez-vous choisi la bonne formation ? 
                L'Afpa vous accompagne dans la construction de votre projet professionnel
                </p>
          </div>
      </div>
      <div className='footer__item'>
            <div className='footer__item__header'>
            <div className='footer__item__box'>
                <img src="https://www.afpa.fr/documents/21653/12675794/logo-afpa.png/f1270119-4bc4-41d2-bbdc-b9dd0260c88f?t=1449670533125" alt="" />
            </div>
            <div className='footer__item__box'>
                  <img src="https://www.afpa.fr/documents/21653/12675794/Logo+FSE+quadri-130.jpg/66bb3f4b-47fe-4b34-bf17-ddbabc5de4ac?t=1532349889229" alt="" />
            </div>
            <div className='footer__item__box'>
                <img src="https://www.afpa.fr/documents/21653/12675794/logo+Synofdes.png/3771323c-507a-4548-ae63-508e7594ef06?t=1449670532689" alt="" />
            </div>
            <div className='footer__item__box'>
                <img src="https://www.afpa.fr/documents/21653/12675794/logo-france-relance/ba12740b-0d41-b6cf-b550-cf0ea3a85b81?t=1621516451160" alt="" />
            </div>
            <div className='footer__item__box'>
                <img src="https://www.afpa.fr/documents/21653/12675794/logo+NextGeneration+EU/251b5e36-d600-d89b-672a-ab39e4088dd5?t=1629465993240" alt="" />
            </div>
            </div>
      </div>
    </div>

    );
}

