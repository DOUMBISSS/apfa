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
    </div>

    );
}

