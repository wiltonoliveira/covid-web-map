import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/logo.svg';

function Home() {
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="COVID"/>

        <main>
          <h1>Acompanhe em tempo real os casos de COVID-19 ao redor do mundo</h1>
        </main>

        <Link to="/Map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
  );
}

export default Home;