import React from "react";
import "./galeria.css";
import sea from "./img/6.jpg";
import swing from "./img/8.jpg";
import knowledge from "./img/12.jpg";

function Galeria() {
  return (
  <section class="section-site">

   <header class="header">
     <div>
       <h1>Galeria</h1>
     </div>
   </header>

   <main class="main-galeria">
    <div class="div-galeria">
      <div class="card-imagem">
        <img class="imagem-galeria" src={sea} alt="sea of reality"/>
      </div>
      <div class="card-imagem">
        <img class="imagem-galeria" src={swing} alt="swing of love"/>
      </div>
      <div class="card-imagem">
        <img class="imagem-galeria" src={knowledge} alt="knowledge"/>
      </div>
    </div>
   </main>

   <footer className="footer-galeria">
     <h2>
       Divulgue :)
     </h2>
   </footer>



  </section>

  )
}

export default Galeria;
