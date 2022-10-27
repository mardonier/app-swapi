import React from "react";
import styles from '../pages/CSS/Home.module.css'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao 
        <span> Star Wars Ascan Atlântico</span>
        <img src={'https://br.web.img3.acsta.net/newsv7/22/05/19/23/59/2239018.jpg'} alt="Ascan" />
      </h1>
    </section>
  )
}

export default Home;

