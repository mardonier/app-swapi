import React from "react";
import styles from '../pages/CSS/Home.module.css'
import logo from '../../img/StarWars_logo_grande.png';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao 
        <span>Star Wars Ascan Atlântico</span>
        <img src={logo} alt="Costs" />
      </h1>
    </section>
  )
}

export default Home;

