import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import NavLogin from '../components/NavLogin';


function Navbar () {
  const [nav , setNav] = useState(false);
    const openLog = ()=>{
      setNav(true)
    }

    const auth = localStorage.getItem("user");

    return (
      <header>

      { auth ? (
        <div className='navbar'>
          <div className="navbar--left">
               <div className="navbar--logo">
              <Link to='/'><img src="https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1682512135871" alt="" /></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
            <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to='/'> Partenaire</Link>
              <Link className='liste' to='/'> Entreprise</Link>
              <Link className='liste' to='/'>Nos Formations</Link>
              <Link className='liste' to='/'> Actualités</Link>
              <Link className='liste' to='/'> Groupe Apfa</Link>
            </div>
          </div>

          <div className="navbar--right">
          <div className="navbar--right--content">
                            <NavLogin nav={nav} setNav={setNav}/>
                            <button onClick={openLog} className="btn--connexion"> <i class="fa-solid fa-user"></i> Mon Compte </button>
                  </div>
          </div>
         </div>

         ) : (
          <div className='navbar'>
           <div className="navbar--left">
               <div className="navbar--logo">
              <Link to='/'><img src="https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1682512135871" alt="" /></Link>
            </div>
          </div>

          <div className="navbar--center">
          <div className="navbar--center--content">
            <Link className='liste' to="/">Accueil</Link>
              <Link className='liste' to='/'> Partenaire</Link>
              <Link className='liste' to='/'> Entreprise</Link>
              <Link className='liste' to='/nos--formations'>Nos Formations</Link>
              <Link className='liste' to='/'> Actualités</Link>
              <Link className='liste' to='/'> Groupe Apfa</Link>
            </div>
          </div>
          <div className="navbar--right">
                  <div className="navbar--right--content">
                       <Link to='/home'><button className="btn--connexion"> <i class="fa-solid fa-user"></i>  Connexion</button></Link>
                  </div>
          </div>
         </div>
        )}


    </header>
    );
}

export default Navbar;
