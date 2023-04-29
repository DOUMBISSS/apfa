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
          <div className="container">
            <h2 className='title__categorie'> Les produits les plus populaires</h2>
            <div className='more__order__res'>
          </div>
          

          </div>
           </div>
          <Footer/>
        </div>

    );
}

