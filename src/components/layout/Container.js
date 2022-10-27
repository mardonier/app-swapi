import React from "react";
import styles from '../layout/CSS/Container.module.css'

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container
