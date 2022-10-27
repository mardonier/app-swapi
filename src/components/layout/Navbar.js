import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "../layout/CSS/Navbar.module.css";
import logo from "../../img/starWars_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home </Link>
          </li>
          <li className={styles.item}>
            <Link to="/personagens">Personagens</Link>
          </li>
          <li className={styles.item}>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li className={styles.item}>
            <Link to="/planetas">Planetas</Link>
          </li>
          <li className={styles.item}>
            <Link to="/naves">Naves</Link>
          </li>
          <li className={styles.item}>
            <Link to="/especies">Espécies</Link>
          </li>
          <li className={styles.item}>
            <Link to="/veiculos">Veículos</Link>
          </li>


        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
