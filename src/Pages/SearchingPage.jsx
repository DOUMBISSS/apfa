import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { AddArticle, getAllArticles } from "../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function SearchingPage() {
    const keys = ["categorie"];
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

  
       

    return (
        <div>
             <Navbar search={search} setSearch={setSearch}/>
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Recherche</li>
                </ol>
                </nav>
        <Footer/>
            </div>
        </div>
    )
}