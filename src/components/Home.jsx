import 'animate.css';
import '../App.css';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import Navbar from '../Pages/Navbar';


export default function Home () {

  const [signUp,setSignUp] = useState(true);


    return (
        <div>
                    <Navbar/>
         <div className="container--connexion">
            <div className='container--first--part'>
                <div className='container--first--part--content'>
                  <img src="https://www.afpa.fr/image/layout_set_logo?img_id=34521924&t=1682512135871" alt="" />
                </div>
            </div>
            <div className='containter--second--part'>
            <div className='container--login'>
              <div className='container--login--header'>
                  <button className='btn--header' style={{background :signUp ? "red" :"#031b4e" }} onClick={()=>setSignUp(true)}>Se connecter</button>
                  <button className='btn--header' style={{background :signUp ? "#031b4e" :"red" }} onClick={()=>setSignUp(false)}>S'inscrire</button>
              </div>
              {signUp ? <Login/> : <Register/>}
            </div>
            </div>
          </div>

      </div>
    )
  }
