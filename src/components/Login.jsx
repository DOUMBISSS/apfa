import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import Navbar from "../Pages/Navbar";



export default function Login (){
  const navigate = useNavigate();

  // const auth = localStorage.getItem("user");


    return (
        <div>
            <div className="container__login__page">
              <div className='login--content'>
                      <h2 className='login--content--header'>Se connecter</h2>
                      <form>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                          <label htmlFor="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block shadow" >Connexion</button>
                      </form>
                  </div>
                </div>
                </div>
                    
    )
}