import React from "react";
import "./galeria.css";
import sea from "./img/6.jpg";
import swing from "./img/8.jpg";
import knowledge from "./img/12.jpg";
import fly from "./img/17.jpg";
import nature from "./img/9.jpg";
import botaohome from "./assets/home.png"

function Galeria() {
  return (
    <section class="section-site">
      <header class="header">
        <div>
          <h1>Galeria</h1>
        </div>
        <a href="https://localhost:3000/"
        target="_blank"
        rel="noopener noreferrer">
        <img src={botaohome} alt="home" class='botaohome' />
        </a>
      </header>

      <main class="main-galeria">
        <div class="card-imagem">
          <img class="imagem-galeria" src={sea} alt="sea of reality" />
        </div>
        <div class="card-imagem">
          <img class="imagem-galeria" src={swing} alt="swing of love" />
        </div>
        <div class="card-imagem">
          <img class="imagem-galeria" src={knowledge} alt="knowledge" />
        </div>
        <div class="card-imagem">
          <img class="imagem-galeria" src={fly} alt="knowledge" />
        </div>
        <div class="card-imagem">
          <img class="imagem-galeria" src={nature} alt="knowledge" />
        </div>
      </main>

      <footer className="footer-galeria">
        <h2>Divulgue :)</h2>
      </footer>
    </section>
  );
}

export default Galeria;
