import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavLogin from '../components/NavLogin';


function Navbar ({}) {
  const [nav , setNav] = useState(false);
  const [display,setDisplay]=useState(false);
  const navigate = useNavigate()


    const openLog = ()=>{
      setNav(true)
    }
  const showMenu = () =>{
    setDisplay(true)
}
const afficher = ()=> {
  setDisplay (false)
}

const logout =()=>{
  localStorage.clear();
  navigate('/');
}

const auth = localStorage.getItem("user");

    return (
      <header>

      { auth ? (
        <div className='navbar'>
          <div className="navbar--left">
          <div className='icon--menu' onClick={showMenu}>
               <i className="fa-solid fa-bars"></i>
               </div>
               <div className="navbar--logo">
              <Link to='/'><img src="https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1682512135871" alt="" /></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
            <Link className='liste' to="/Accueil">Accueil</Link>
              <Link className='liste' to='/Accueil'> Partenaire</Link>
              <Link className='liste' to='/Accueil'> Entreprise</Link>
              <Link className='liste' to='/Accueil'>Nos Formations</Link>
              <Link className='liste' to='/Accueil'> Actualités</Link>
              <Link className='liste' to='/Accueil'> Groupe Apfa</Link>
            </div>
          </div>

          <div className="navbar--right">
          <div className="navbar--right--content">
                            {/* <div className='nav--items'>
                              <i class="fa-solid fa-bell" onClick={showNotifications}></i>
                            </div> */}
                            <NavLogin nav={nav} setNav={setNav}/>
                            <button onClick={openLog} className="btn--connexion"> <i class="fa-solid fa-user"></i> Mon Compte </button>
                  </div>
          </div>
         </div>

         ) : (
          <div className='navbar'>
           <div className="navbar--left">
          <div className='icon--menu' onClick={showMenu}>
               <i className="fa-solid fa-bars"></i>
               </div>
               <div className="navbar--logo">
              <Link to='/'><img src="https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1682512135871" alt="" /></Link>
            </div>
          </div>

          <div className="navbar--center">
          <div className="navbar--center--content">
            <Link className='liste' to="/Accueil">Accueil</Link>
              <Link className='liste' to='/Accueil'> Partenaire</Link>
              <Link className='liste' to='/Accueil'> Entreprise</Link>
              <Link className='liste' to='/Accueil'>Nos Formations</Link>
              <Link className='liste' to='/Accueil'> Actualités</Link>
              <Link className='liste' to='/Accueil'> Groupe Apfa</Link>
            </div>

            <div className='logo--resp'>
              <div className="navbar--logo--resp">
                <Link to="/"> <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt=""/></Link>
              </div>
            </div>
          </div>
          <div className="navbar--right">
                  <div className="navbar--right--content">
                       <Link to='/home'><button className="btn--connexion"> <i class="fa-solid fa-user"></i>  Connexion</button></Link>
                  </div>
          </div>
         </div>
        )}

        <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu' onClick={afficher}>
                        <div className='btn--close--sidebar'>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <Link className='liste' to="/">Accueil</Link>
                          </div>
                        </div>
                        </div>
        </div>

    </header>
    );
}

export default Navbar;
